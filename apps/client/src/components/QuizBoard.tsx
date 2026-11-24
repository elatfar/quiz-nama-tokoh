import {
	AlertCircle,
	ChevronRight,
	Flame,
	Lightbulb,
	Quote,
	Timer as TimerIcon,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { AnswerItem, QuizQuestion } from "shared";

interface QuizBoardProps {
	questions: QuizQuestion[];
	onFinishQuiz: (answers: AnswerItem[]) => void;
	onQuitQuiz: () => void;
}

export const QuizBoard: React.FC<QuizBoardProps> = ({
	questions,
	onFinishQuiz,
	onQuitQuiz,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [answers, setAnswers] = useState<AnswerItem[]>([]);
	const [selectedOption, setSelectedOption] = useState<string | null>(null);
	const [revealedCluesCount, setRevealedCluesCount] = useState(1);
	const [timeLeft, setTimeLeft] = useState(20);
	const [streak, setStreak] = useState(0);
	const [isAnswering, setIsAnswering] = useState(false);

	const currentQuestion = questions[currentIndex];
	const totalQuestions = questions.length;
	const startTimeRef = useRef<number>(Date.now());

	const recordAnswer = useCallback(
		(optionId: string, timeSpent: number) => {
			if (!currentQuestion) return;

			const answerItem: AnswerItem = {
				questionId: currentQuestion.id,
				selectedHeroId: optionId,
				timeSpentSeconds: timeSpent,
			};

			const updatedAnswers = [...answers, answerItem];
			setAnswers(updatedAnswers);

			// Transisi jeda singkat 600ms untuk feedback klik
			setTimeout(() => {
				if (currentIndex + 1 < totalQuestions) {
					setCurrentIndex((prev) => prev + 1);
				} else {
					onFinishQuiz(updatedAnswers);
				}
			}, 600);
		},
		[currentQuestion, answers, currentIndex, totalQuestions, onFinishQuiz],
	);

	const handleTimeout = useCallback(() => {
		if (isAnswering) return;
		setIsAnswering(true);
		setStreak(0);

		// Jawaban kosong karena waktu habis
		const timeSpent = currentQuestion?.timeLimitSeconds || 20;
		recordAnswer("", timeSpent);
	}, [isAnswering, currentQuestion, recordAnswer]);

	// Reset timer dan state setiap ganti pertanyaan
	useEffect(() => {
		setTimeLeft(currentQuestion?.timeLimitSeconds || 20);
		setSelectedOption(null);
		setRevealedCluesCount(1);
		setIsAnswering(false);
		startTimeRef.current = Date.now();
	}, [currentQuestion]);

	// Timer Countdown
	useEffect(() => {
		if (isAnswering || timeLeft <= 0) return;

		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					handleTimeout();
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [isAnswering, timeLeft, handleTimeout]);

	// Auto reveal clue setiap beberapa detik jika ada lebih dari 1 clue
	useEffect(() => {
		if (!currentQuestion || currentQuestion.clues.length <= 1) return;

		if (timeLeft === 13 && revealedCluesCount < 2) {
			setRevealedCluesCount(2);
		} else if (timeLeft === 6 && revealedCluesCount < 3) {
			setRevealedCluesCount(3);
		}
	}, [timeLeft, revealedCluesCount, currentQuestion]);

	const handleSelectOption = (optionId: string) => {
		if (isAnswering) return;
		setIsAnswering(true);
		setSelectedOption(optionId);

		const timeSpent = Math.max(
			1,
			Math.round((Date.now() - startTimeRef.current) / 1000),
		);

		// Update streak tampilan
		setStreak((prev) => prev + 1);

		recordAnswer(optionId, timeSpent);
	};

	const handleManualRevealClue = () => {
		if (currentQuestion && revealedCluesCount < currentQuestion.clues.length) {
			setRevealedCluesCount((prev) => prev + 1);
		}
	};

	if (!currentQuestion) {
		return null;
	}

	const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;
	const isUrgent = timeLeft <= 5;

	return (
		<div className="max-w-3xl mx-auto py-6 sm:py-10 px-4">
			{/* Top Bar: Progress, Timer, Streak, Batalkan */}
			<div className="mb-6 space-y-3">
				<div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#57534E]">
					<div className="flex items-center gap-2">
						<span className="font-serif text-[#1C1917] font-bold text-base">
							Pertanyaan {currentIndex + 1}
						</span>
						<span className="text-[#A8A29E]">dari {totalQuestions}</span>
					</div>

					{/* Streak Flame */}
					{streak > 1 && (
						<div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-300 font-bold text-xs animate-bounce">
							<Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
							<span>{streak}x Combo Beruntun!</span>
						</div>
					)}

					{/* Timer */}
					<div
						className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono font-bold text-xs sm:text-sm transition-colors ${
							isUrgent
								? "bg-red-600 text-white animate-pulse"
								: "bg-[#F3EFE6] text-[#1C1917] border border-[#E7E0D3]"
						}`}
					>
						<TimerIcon className="w-4 h-4" />
						<span>{timeLeft}s</span>
					</div>
				</div>

				{/* Progress Line */}
				<div className="w-full h-2 bg-[#E7E0D3] rounded-full overflow-hidden">
					<div
						className="h-full bg-linear-to-r from-[#B91C1C] via-[#DC2626] to-amber-500 transition-all duration-300 ease-out"
						style={{ width: `${progressPercent}%` }}
					/>
				</div>
			</div>

			{/* Main Question Card (Estetika Arsip Dokumen Kuno) */}
			<div className="bg-white rounded-2xl border-2 border-[#E7E0D3] p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
				{/* Watermark / Aksen Cap Dokumen */}
				<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border-8 border-[#FAF5EE] pointer-events-none opacity-40 flex items-center justify-center font-serif text-3xl font-black text-[#D5CBBE]">
					1945
				</div>

				{/* Kategori & Wilayah Tag */}
				<div className="flex flex-wrap items-center gap-2">
					<span className="px-2.5 py-1 rounded-md bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-semibold uppercase tracking-wider">
						📍 Asal: {currentQuestion.region}
					</span>
					<span className="px-2.5 py-1 rounded-md bg-[#F3EFE6] text-[#57534E] border border-[#E7E0D3] text-xs font-semibold uppercase tracking-wider">
						🏷️ {currentQuestion.category.replace(/_/g, " ")}
					</span>
				</div>

				{/* Prompt Soal */}
				<h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-snug">
					{currentQuestion.prompt}
				</h2>

				{/* Kutipan Sejarah (jika ada) */}
				{currentQuestion.quote && (
					<div className="p-4 sm:p-5 rounded-xl bg-[#FAF5EE] border-l-4 border-[#B91C1C] space-y-2">
						<div className="flex items-center gap-2 text-[#B91C1C] text-xs font-bold uppercase tracking-wider">
							<Quote className="w-4 h-4" />
							<span>Kutipan Bersejarah</span>
						</div>
						<p className="font-serif italic text-base sm:text-lg text-[#292524] leading-relaxed">
							{currentQuestion.quote}
						</p>
					</div>
				)}

				{/* Clues Box / Petunjuk Rahasia */}
				<div className="space-y-2.5">
					<div className="flex items-center justify-between text-xs text-[#78716C] font-semibold">
						<span className="flex items-center gap-1.5 uppercase tracking-wider">
							<Lightbulb className="w-3.5 h-3.5 text-amber-600" />
							<span>
								Petunjuk Arsip Sejarah ({revealedCluesCount}/
								{currentQuestion.clues.length})
							</span>
						</span>
						{revealedCluesCount < currentQuestion.clues.length && (
							<button
								type="button"
								onClick={handleManualRevealClue}
								className="text-xs text-[#B91C1C] hover:underline font-bold cursor-pointer"
							>
								+ Buka Clue Tambahan
							</button>
						)}
					</div>

					<div className="space-y-2">
						{currentQuestion.clues
							.slice(0, revealedCluesCount)
							.map((clue, idx) => (
								<div
									key={`${currentQuestion.id}_clue_${clue.substring(0, 10)}`}
									className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#E7E0D3] text-sm text-[#44403C] animate-fadeIn"
								>
									<span className="w-5 h-5 rounded-full bg-[#E7E0D3] text-[#78716C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
										{idx + 1}
									</span>
									<span className="leading-relaxed">{clue}</span>
								</div>
							))}
					</div>
				</div>

				{/* Peringatan waktu mepet */}
				{timeLeft <= 5 && !isAnswering && (
					<div className="flex items-center gap-2 text-xs text-red-600 font-semibold animate-pulse">
						<AlertCircle className="w-4 h-4" />
						<span>Waktu segera habis! Pilih jawaban sekarang.</span>
					</div>
				)}

				{/* Grid 4 Opsi Pahlawan */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
					{currentQuestion.options.map((opt, idx) => {
						const labelLetters = ["A", "B", "C", "D"];
						const isSelected = selectedOption === opt.id;
						return (
							<button
								key={opt.id}
								type="button"
								disabled={isAnswering}
								onClick={() => handleSelectOption(opt.id)}
								className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3 cursor-pointer group ${
									isSelected
										? "bg-linear-to-r from-[#B91C1C] to-[#991B1B] text-white border-[#7F1D1D] shadow-md scale-[1.01]"
										: "bg-white hover:bg-[#FAF5EE] border-[#E7E0D3] hover:border-[#B91C1C]/60 text-[#1C1917]"
								} ${isAnswering && !isSelected ? "opacity-50" : ""}`}
							>
								<span
									className={`w-7 h-7 rounded-lg font-bold text-sm flex items-center justify-center shrink-0 border transition-colors ${
										isSelected
											? "bg-white text-[#B91C1C] border-white"
											: "bg-[#F3EFE6] text-[#78716C] border-[#E7E0D3] group-hover:border-[#B91C1C] group-hover:text-[#B91C1C]"
									}`}
								>
									{labelLetters[idx]}
								</span>
								<div className="flex-1 min-w-0">
									<div className="font-bold text-sm sm:text-base font-serif leading-tight">
										{opt.text}
									</div>
									{opt.subtext && (
										<div
											className={`text-xs mt-0.5 ${
												isSelected ? "text-red-100" : "text-[#78716C]"
											}`}
										>
											{opt.subtext}
										</div>
									)}
								</div>
								<ChevronRight
									className={`w-4 h-4 shrink-0 transition-transform ${
										isSelected
											? "text-white translate-x-1"
											: "text-[#A8A29E] opacity-0 group-hover:opacity-100"
									}`}
								/>
							</button>
						);
					})}
				</div>
			</div>

			{/* Footer: Tombol Batalkan / Keluar */}
			<div className="mt-6 flex justify-between items-center text-xs text-[#78716C]">
				<span>Pilih salah satu tokoh pahlawan di atas.</span>
				<button
					type="button"
					onClick={onQuitQuiz}
					className="hover:text-red-600 transition-colors cursor-pointer"
				>
					Batalkan Kuis
				</button>
			</div>
		</div>
	);
};
