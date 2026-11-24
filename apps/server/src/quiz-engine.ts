import {
	HEROES,
	type Hero,
	type QuestionReview,
	type QuizOption,
	type QuizQuestion,
	type QuizQuestionType,
	type QuizResult,
	type QuizSession,
	type QuizSessionInit,
	type ScoreRank,
	type SubmitQuizPayload,
} from "shared";

// In-memory session answer key store (di server/worker instance)
interface StoredSession {
	id: string;
	createdAt: number;
	answers: Map<string, string>; // questionId -> heroId
	questions: QuizQuestion[];
}

const activeSessions = new Map<string, StoredSession>();

// Cleanup sesi lama (lebih dari 2 jam)
function cleanupOldSessions() {
	const now = Date.now();
	const twoHours = 2 * 60 * 60 * 1000;
	for (const [id, session] of activeSessions.entries()) {
		if (now - session.createdAt > twoHours) {
			activeSessions.delete(id);
		}
	}
}

// Algoritma Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const itemI = copy[i];
		const itemJ = copy[j];
		if (itemI !== undefined && itemJ !== undefined) {
			copy[i] = itemJ;
			copy[j] = itemI;
		}
	}
	return copy;
}

// Pilih distractors yang cerdas (kontekstual: dari pulau/wilayah yang sama atau kategori yang mirip)
function selectDistractors(
	correctHero: Hero,
	allHeroes: Hero[],
	count = 3,
): Hero[] {
	const others = allHeroes.filter((h) => h.id !== correctHero.id);

	// Prioritas 1: Tokoh dari pulau / wilayah yang sama
	const sameIsland = shuffle(
		others.filter((h) => h.island === correctHero.island),
	);

	// Prioritas 2: Tokoh dari kategori yang sama
	const sameCategory = shuffle(
		others.filter((h) => h.category === correctHero.category),
	);

	// Sisanya acak
	const randomOthers = shuffle(others);

	const selected = new Set<Hero>();

	for (const hero of sameIsland) {
		if (selected.size >= count) break;
		selected.add(hero);
	}

	for (const hero of sameCategory) {
		if (selected.size >= count) break;
		selected.add(hero);
	}

	for (const hero of randomOthers) {
		if (selected.size >= count) break;
		selected.add(hero);
	}

	return Array.from(selected).slice(0, count);
}

// Generate single question
function createQuestion(
	hero: Hero,
	index: number,
	allHeroes: Hero[],
	availableTypes: QuizQuestionType[],
): QuizQuestion {
	const questionId = `q_${Date.now()}_${index}_${Math.random().toString(36).substring(2, 7)}`;
	const distractors = selectDistractors(hero, allHeroes, 3);
	const rawOptions: QuizOption[] = [
		{ id: hero.id, text: hero.name, subtext: hero.originRegion },
		...distractors.map((d) => ({
			id: d.id,
			text: d.name,
			subtext: d.originRegion,
		})),
	];

	const options = shuffle(rawOptions);
	const randomTypeIndex = Math.floor(Math.random() * availableTypes.length);
	const type: QuizQuestionType =
		availableTypes[randomTypeIndex] ?? "clue_to_hero";

	let prompt = "";
	let quote: string | undefined;
	let clues: string[] = [];

	switch (type) {
		case "quote_to_hero":
			if (hero.famousQuote) {
				prompt =
					"Siapakah tokoh pahlawan nasional yang mengucapkan kutipan bersejarah berikut?";
				quote = `"${hero.famousQuote}"`;
				clues = [
					`Gelar / Peran: ${hero.significanceTag}`,
					`Daerah Asal: ${hero.originRegion}`,
				];
				break;
			}
			// Fallback jika quote kosong
			prompt = `Siapakah tokoh yang dikenal dengan gelar "${hero.significanceTag}"?`;
			clues = hero.clues.slice(0, 3);
			break;

		case "action_to_hero":
			prompt = `Siapakah tokoh pejuang kemerdekaan yang memiliki peran kunci dalam peristiwa berikut?`;
			clues = [
				hero.keyAction,
				`Masa Perjuangan: era ${hero.period}`,
				`Daerah Asal: ${hero.originRegion}`,
			];
			break;

		case "region_to_hero":
			prompt = `Berdasarkan rekam jejak perjuangan di wilayah ${hero.originRegion} (${hero.island}), siapakah pahlawan yang dimaksud?`;
			clues = [
				hero.clues[0] || hero.summary,
				hero.clues[1] || hero.keyAction,
				`Julukan / Peran: ${hero.significanceTag}`,
			];
			break;
		default:
			prompt =
				"Perhatikan petunjuk-petunjuk sejarah berikut, siapakah tokoh pahlawan ini?";
			clues = hero.clues.slice(0, 3);
			break;
	}

	return {
		id: questionId,
		number: index + 1,
		type,
		prompt,
		clues,
		quote,
		options,
		category: hero.category,
		region: hero.originRegion,
		timeLimitSeconds: 20,
	};
}

// Generate Sesi Kuis Lengkap
export function createQuizSession(init: QuizSessionInit): QuizSession {
	cleanupOldSessions();

	let pool = [...HEROES];
	if (init.category && init.category !== "all") {
		const filtered = HEROES.filter((h) => h.category === init.category);
		if (filtered.length >= 5) {
			pool = filtered;
		}
	}

	const count = Math.min(init.questionCount, pool.length);
	const chosenHeroes = shuffle(pool).slice(0, count);

	const questionTypes: QuizQuestionType[] = [
		"clue_to_hero",
		"quote_to_hero",
		"action_to_hero",
		"region_to_hero",
	];

	const questions: QuizQuestion[] = [];
	const answersMap = new Map<string, string>();

	chosenHeroes.forEach((hero, idx) => {
		const q = createQuestion(hero, idx, HEROES, questionTypes);
		questions.push(q);
		answersMap.set(q.id, hero.id);
	});

	const sessionId = `quiz_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

	activeSessions.set(sessionId, {
		id: sessionId,
		createdAt: Date.now(),
		answers: answersMap,
		questions,
	});

	return {
		sessionId,
		mode: init.mode,
		totalQuestions: questions.length,
		questions,
		createdAt: new Date().toISOString(),
	};
}

// Evaluasi Skor & Peringkat
export function evaluateQuizSession(payload: SubmitQuizPayload): QuizResult {
	const stored = activeSessions.get(payload.sessionId);
	const heroesMap = new Map(HEROES.map((h) => [h.id, h]));

	let correctCount = 0;
	let currentStreak = 0;
	let maxStreak = 0;
	let totalSpeedBonus = 0;
	let totalStreakBonus = 0;
	let totalTimeSpent = 0;

	const reviews: QuestionReview[] = [];

	payload.answers.forEach((ans, index) => {
		totalTimeSpent += ans.timeSpentSeconds;
		let correctHeroId = "";
		let questionPrompt = "";

		if (stored) {
			correctHeroId = stored.answers.get(ans.questionId) || "";
			const qObj = stored.questions.find((q) => q.id === ans.questionId);
			if (qObj) {
				questionPrompt = qObj.prompt;
			}
		}

		// Fallback jika sesi tidak ditemukan di cache (misal restart worker)
		if (!correctHeroId) {
			// fallback default check dari id opsi jika sesuai
			correctHeroId = ans.selectedHeroId;
		}

		const isCorrect = ans.selectedHeroId === correctHeroId;
		const correctHero = heroesMap.get(correctHeroId);
		const selectedHero = heroesMap.get(ans.selectedHeroId);

		let pointsEarned = 0;
		if (isCorrect) {
			correctCount++;
			currentStreak++;
			if (currentStreak > maxStreak) {
				maxStreak = currentStreak;
			}

			// Poin dasar: 100
			pointsEarned = 100;

			// Speed bonus: jika menjawab lebih cepat dari 10 detik
			const remainingTime = Math.max(0, 20 - ans.timeSpentSeconds);
			const speedBonus = Math.round(remainingTime * 5); // maks 100
			totalSpeedBonus += speedBonus;
			pointsEarned += speedBonus;

			// Streak bonus: +20 poin untuk setiap streak >= 2
			if (currentStreak >= 2) {
				const streakBonus = (currentStreak - 1) * 20;
				totalStreakBonus += streakBonus;
				pointsEarned += streakBonus;
			}
		} else {
			currentStreak = 0;
		}

		reviews.push({
			questionId: ans.questionId,
			number: index + 1,
			prompt: questionPrompt || "Tebak Pahlawan Nasional",
			isCorrect,
			selectedHeroId: ans.selectedHeroId,
			selectedHeroName: selectedHero ? selectedHero.name : "Tidak Dijawab",
			correctHeroId: correctHeroId,
			correctHeroName: correctHero ? correctHero.name : "Pahlawan Nasional",
			correctHeroTitle: correctHero ? correctHero.title : "",
			trivia: correctHero ? correctHero.trivia : "",
			keyAction: correctHero ? correctHero.keyAction : "",
			famousQuote: correctHero ? correctHero.famousQuote : undefined,
			pointsEarned,
		});
	});

	const totalQuestions = payload.answers.length || 1;
	const baseScore = correctCount * 100;
	const finalScore = baseScore + totalSpeedBonus + totalStreakBonus;
	const accuracyPercentage = Math.round((correctCount / totalQuestions) * 100);

	const rank = calculateRank(accuracyPercentage, finalScore);

	// Hapus sesi selesai
	if (stored) {
		activeSessions.delete(payload.sessionId);
	}

	return {
		sessionId: payload.sessionId,
		totalQuestions,
		correctAnswers: correctCount,
		accuracyPercentage,
		baseScore,
		speedBonus: totalSpeedBonus,
		streakBonus: totalStreakBonus,
		finalScore,
		totalTimeSeconds: Math.round(totalTimeSpent),
		rank,
		reviews,
	};
}

function calculateRank(accuracy: number, _score: number): ScoreRank {
	if (accuracy >= 90) {
		return {
			title: "Mahaguru Sejarah Nusantara",
			badge: "👑",
			description:
				"Luar biasa! Pemahaman Anda akan lintasan sejarah dan jasa pahlawan bangsa sangat mendalam dan paripurna.",
		};
	}
	if (accuracy >= 75) {
		return {
			title: "Arsiparis Utama Pergerakan",
			badge: "📜",
			description:
				"Hebat! Anda menguasai jejak perjuangan para tokoh kemerdekaan dari berbagai penjuru tanah air dengan sangat baik.",
		};
	}
	if (accuracy >= 60) {
		return {
			title: "Ksatria Literasi Bangsa",
			badge: "🛡️",
			description:
				"Bagus! Pengetahuan sejarah pahlawan Anda kokoh, siap melangkah menjadi pembelajar sejarah yang ulung.",
		};
	}
	if (accuracy >= 40) {
		return {
			title: "Kader Penelusur Sejarah",
			badge: "🔍",
			description:
				"Cukup baik! Telusuri lebih jauh kisah-kisah perjuangan heroik para pahlawan di ensiklopedia kami.",
		};
	}
	return {
		title: "Pelajar Pemula Sejarah",
		badge: "🌱",
		description:
			"Awal yang baik untuk belajar! Buka galeri tokoh dan baca fakta-fakta menarik pahlawan untuk kuis berikutnya.",
	};
}
