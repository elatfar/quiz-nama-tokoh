import { AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { AnswerItem, Hero, QuizQuestion, QuizResult } from "shared";
import { HEROES } from "shared";
import { Header } from "./components/Header";
import { HeroEncyclopedia } from "./components/HeroEncyclopedia";
import { QuizBoard } from "./components/QuizBoard";
import { ResultSummary } from "./components/ResultSummary";
import { StartScreen } from "./components/StartScreen";
import { api } from "./lib/api";

export function App() {
	const [activeTab, setActiveTab] = useState<"quiz" | "encyclopedia">("quiz");
	const [quizState, setQuizState] = useState<"idle" | "playing" | "result">(
		"idle",
	);
	const [heroes, setHeroes] = useState<Hero[]>(HEROES);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	// Sesi Kuis
	const [currentSessionId, setCurrentSessionId] = useState<string>("");
	const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
	const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

	// Highscore dari localStorage
	const [highScore, setHighScore] = useState<number | null>(() => {
		const saved = localStorage.getItem("pahlawan_quiz_highscore");
		return saved ? Number(saved) : null;
	});
	const [lastRank, setLastRank] = useState<string | null>(() => {
		return localStorage.getItem("pahlawan_quiz_last_rank");
	});

	// Muat daftar pahlawan dari API saat inisialisasi
	useEffect(() => {
		async function fetchHeroes() {
			try {
				const res = await api.getHeroes();
				if (res.success && res.data) {
					setHeroes(res.data);
				}
			} catch (err) {
				console.warn("Menggunakan dataset lokal terkurasi shared:", err);
				setHeroes(HEROES);
			}
		}
		fetchHeroes();
	}, []);

	// Mulai Kuis
	const handleStartQuiz = async (config: {
		mode: "kilat" | "standar" | "maraton";
		category?: string;
		questionCount: number;
	}) => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await api.startQuiz({
				mode: config.mode,
				category: config.category,
				questionCount: config.questionCount,
			});

			if (res.success && res.data) {
				setCurrentSessionId(res.data.sessionId);
				setQuizQuestions(res.data.questions);
				setQuizState("playing");
				setActiveTab("quiz");
			} else {
				throw new Error("Gagal menerima data sesi kuis");
			}
		} catch (err) {
			console.error("Gagal memulai kuis via API:", err);
			setError(
				"Terjadi kendala saat memuat kuis dari server. Silakan coba lagi.",
			);
		} finally {
			setIsLoading(false);
		}
	};

	// Selesai Kuis & Submit Jawaban
	const handleFinishQuiz = async (answers: AnswerItem[]) => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await api.submitQuiz({
				sessionId: currentSessionId,
				answers,
			});

			if (res.success && res.data) {
				setQuizResult(res.data);
				setQuizState("result");

				// Update rekor lokal
				if (highScore === null || res.data.finalScore > highScore) {
					setHighScore(res.data.finalScore);
					localStorage.setItem(
						"pahlawan_quiz_highscore",
						res.data.finalScore.toString(),
					);
				}
				setLastRank(res.data.rank.title);
				localStorage.setItem("pahlawan_quiz_last_rank", res.data.rank.title);
			} else {
				throw new Error("Gagal mengkalkulasi skor");
			}
		} catch (err) {
			console.error("Gagal submit jawaban kuis:", err);
			setError(
				"Gagal mengirimkan jawaban ke server. Silakan ulangi sesi kuis.",
			);
			setQuizState("idle");
		} finally {
			setIsLoading(false);
		}
	};

	const handleQuitQuiz = () => {
		if (window.confirm("Apakah Anda yakin ingin membatalkan kuis ini?")) {
			setQuizState("idle");
			setQuizQuestions([]);
		}
	};

	const handleRestart = () => {
		setQuizState("idle");
		setQuizResult(null);
		setQuizQuestions([]);
	};

	return (
		<div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans">
			{/* Header Global */}
			<Header
				activeTab={activeTab}
				setActiveTab={(tab) => {
					setActiveTab(tab);
					setError(null);
				}}
				isPlaying={quizState === "playing"}
			/>

			{/* Notifikasi Error jika ada */}
			{error && (
				<div className="max-w-3xl mx-auto mt-4 px-4 w-full">
					<div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center justify-between">
						<div className="flex items-center gap-2">
							<AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
							<span>{error}</span>
						</div>
						<button
							type="button"
							onClick={() => setError(null)}
							className="text-xs font-bold text-red-700 hover:underline cursor-pointer"
						>
							Tutup
						</button>
					</div>
				</div>
			)}

			{/* Main Content Area */}
			<main className="flex-1">
				{isLoading ? (
					<div className="py-24 flex flex-col items-center justify-center space-y-4">
						<Loader2 className="w-8 h-8 text-[#B91C1C] animate-spin" />
						<p className="font-serif text-base text-[#57534E]">
							Membuka Lembaran Arsip Sejarah...
						</p>
					</div>
				) : activeTab === "encyclopedia" ? (
					<HeroEncyclopedia
						heroes={heroes}
						onStartQuizWithCategory={(cat) => {
							setActiveTab("quiz");
							handleStartQuiz({
								mode: "standar",
								category: cat,
								questionCount: 10,
							});
						}}
					/>
				) : (
					<>
						{quizState === "idle" && (
							<StartScreen
								onStartQuiz={handleStartQuiz}
								onOpenEncyclopedia={() => setActiveTab("encyclopedia")}
								highScore={highScore}
								lastRank={lastRank}
							/>
						)}

						{quizState === "playing" && (
							<QuizBoard
								questions={quizQuestions}
								onFinishQuiz={handleFinishQuiz}
								onQuitQuiz={handleQuitQuiz}
							/>
						)}

						{quizState === "result" && quizResult && (
							<ResultSummary
								result={quizResult}
								onRestart={handleRestart}
								onOpenEncyclopedia={() => setActiveTab("encyclopedia")}
							/>
						)}
					</>
				)}
			</main>

			{/* Footer Arsip Kemerdekaan */}
			<footer className="border-t border-[#E7E0D3] bg-[#F4EFE6]/70 py-6 px-4 text-center text-xs text-[#78716C] space-y-1">
				<p className="font-serif font-bold text-[#1C1917]">
					🇮🇩 Kuis Pahlawan Nasional Indonesia • Arsip Digital Kemerdekaan
				</p>
				<p>
					Ditenagai oleh Stack <strong>BHVR</strong> (Bun, Hono, Vite, React) &
					Cloudflare Workers Single Origin.
				</p>
			</footer>
		</div>
	);
}

export default App;
