import {
	BookOpen,
	Check,
	CheckCircle2,
	Flame,
	Quote,
	RotateCcw,
	Share2,
	Sparkles,
	XCircle,
	Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { QuizResult } from "shared";

interface ResultSummaryProps {
	result: QuizResult;
	onRestart: () => void;
	onOpenEncyclopedia: () => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({
	result,
	onRestart,
	onOpenEncyclopedia,
}) => {
	const [copied, setCopied] = useState(false);
	const [filterTab, setFilterTab] = useState<"all" | "correct" | "incorrect">(
		"all",
	);

	const handleShare = () => {
		const text =
			`🇮🇩 Saya baru saja menyelesaikan Kuis Pahlawan Nasional Indonesia!\n\n` +
			`🏆 Gelar: ${result.rank.badge} ${result.rank.title}\n` +
			`⭐ Skor Akhir: ${result.finalScore} Poin (Akurasi: ${result.accuracyPercentage}%)\n` +
			`⚡ Bonus Kecepatan: +${result.speedBonus} | 🔥 Bonus Streak: +${result.streakBonus}\n` +
			`⏱️ Waktu: ${result.totalTimeSeconds} detik\n\n` +
			`Ayo uji wawasan sejarah bangsamu di PahlawanKuis!`;

		if (navigator.clipboard) {
			navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2500);
		}
	};

	const filteredReviews = result.reviews.filter((r) => {
		if (filterTab === "correct") return r.isCorrect;
		if (filterTab === "incorrect") return !r.isCorrect;
		return true;
	});

	return (
		<div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 space-y-8">
			{/* Banner Hasil & Gelar Patriotik */}
			<div className="bg-white rounded-3xl border-2 border-[#E7E0D3] p-6 sm:p-10 shadow-sm text-center relative overflow-hidden space-y-6">
				{/* Aksen Latar Bendera Merah Putih Halus */}
				<div className="absolute top-0 left-0 right-0 h-3 bg-linear-to-r from-[#B91C1C] via-[#DC2626] to-[#FAF8F5]" />

				{/* Lencana Gelar */}
				<div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-linear-to-br from-[#FAF5EE] to-[#F3EFE6] border-2 border-[#E7DECD] flex items-center justify-center text-4xl sm:text-5xl shadow-sm">
					<span>{result.rank.badge}</span>
				</div>

				<div className="space-y-2">
					<span className="text-xs uppercase font-bold tracking-widest text-[#B91C1C]">
						Pencapaian Pengetahuan Sejarah
					</span>
					<h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
						{result.rank.title}
					</h1>
					<p className="max-w-xl mx-auto text-sm sm:text-base text-[#57534E] leading-relaxed">
						{result.rank.description}
					</p>
				</div>

				{/* Grid Statistik Skor */}
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
					<div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3]">
						<div className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-1">
							Skor Akhir
						</div>
						<div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#B91C1C]">
							{result.finalScore}
						</div>
					</div>

					<div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3]">
						<div className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-1">
							Akurasi
						</div>
						<div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1C1917]">
							{result.accuracyPercentage}%
						</div>
						<div className="text-[11px] text-[#78716C] mt-0.5">
							{result.correctAnswers}/{result.totalQuestions} Benar
						</div>
					</div>

					<div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3]">
						<div className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
							<Zap className="w-3.5 h-3.5 text-amber-600" />
							<span>Kecepatan</span>
						</div>
						<div className="font-serif text-xl sm:text-2xl font-bold text-amber-700">
							+{result.speedBonus}
						</div>
						<div className="text-[11px] text-[#78716C] mt-0.5">
							{result.totalTimeSeconds}s total
						</div>
					</div>

					<div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E0D3]">
						<div className="text-xs font-semibold text-[#78716C] uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
							<Flame className="w-3.5 h-3.5 text-emerald-600" />
							<span>Combo Streak</span>
						</div>
						<div className="font-serif text-xl sm:text-2xl font-bold text-emerald-700">
							+{result.streakBonus}
						</div>
						<div className="text-[11px] text-[#78716C] mt-0.5">
							Bonus Berturut
						</div>
					</div>
				</div>

				{/* Tombol Aksi Bagikan & Main Lagi */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
					<button
						type="button"
						onClick={handleShare}
						className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#292524] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
					>
						{copied ? (
							<>
								<Check className="w-4 h-4 text-emerald-400" />
								<span>Tersalin ke Clipboard!</span>
							</>
						) : (
							<>
								<Share2 className="w-4 h-4" />
								<span>Bagikan Hasil Kuis</span>
							</>
						)}
					</button>

					<button
						type="button"
						onClick={onRestart}
						className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B91C1C] hover:bg-[#991B1B] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
					>
						<RotateCcw className="w-4 h-4" />
						<span>Ulangi Kuis</span>
					</button>

					<button
						type="button"
						onClick={onOpenEncyclopedia}
						className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#F3EFE6] hover:bg-[#EAE4D7] text-[#1C1917] font-semibold text-sm flex items-center justify-center gap-2 border border-[#E7E0D3] transition-all cursor-pointer"
					>
						<BookOpen className="w-4 h-4 text-[#78716C]" />
						<span>Pelajari 32 Tokoh</span>
					</button>
				</div>
			</div>

			{/* Ulasan Jawaban & Pembahasan Sejarah */}
			<div className="space-y-4">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
					<div>
						<h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
							Ulasan Jawaban & Catatan Sejarah
						</h2>
						<p className="text-xs text-[#78716C]">
							Pelajari konteks sejarah, kutipan, dan peran kunci dari setiap
							pertanyaan kuis.
						</p>
					</div>

					{/* Filter Tab Jawaban */}
					<div className="flex items-center gap-1 bg-[#F3EFE6] p-1 rounded-xl border border-[#E7E0D3] text-xs font-semibold">
						<button
							type="button"
							onClick={() => setFilterTab("all")}
							className={`px-3 py-1.5 rounded-lg transition-all ${
								filterTab === "all"
									? "bg-white text-[#1C1917] shadow-xs"
									: "text-[#78716C]"
							}`}
						>
							Semua ({result.reviews.length})
						</button>
						<button
							type="button"
							onClick={() => setFilterTab("correct")}
							className={`px-3 py-1.5 rounded-lg transition-all ${
								filterTab === "correct"
									? "bg-emerald-600 text-white shadow-xs"
									: "text-[#78716C]"
							}`}
						>
							Benar ({result.correctAnswers})
						</button>
						<button
							type="button"
							onClick={() => setFilterTab("incorrect")}
							className={`px-3 py-1.5 rounded-lg transition-all ${
								filterTab === "incorrect"
									? "bg-red-600 text-white shadow-xs"
									: "text-[#78716C]"
							}`}
						>
							Salah ({result.totalQuestions - result.correctAnswers})
						</button>
					</div>
				</div>

				{/* List Review Cards */}
				<div className="space-y-3">
					{filteredReviews.map((rev) => (
						<div
							key={rev.questionId}
							className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-xs space-y-4 transition-all ${
								rev.isCorrect
									? "border-emerald-200 bg-emerald-50/20"
									: "border-red-200 bg-red-50/20"
							}`}
						>
							{/* Status Row */}
							<div className="flex items-start justify-between gap-3">
								<div className="flex items-center gap-2">
									{rev.isCorrect ? (
										<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
											<CheckCircle2 className="w-4 h-4 text-emerald-600" />
											<span>Tepat (+{rev.pointsEarned} Pts)</span>
										</span>
									) : (
										<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 font-bold text-xs">
											<XCircle className="w-4 h-4 text-red-600" />
											<span>Kurang Tepat</span>
										</span>
									)}
									<span className="text-xs font-semibold text-[#78716C]">
										Soal #{rev.number}
									</span>
								</div>

								<span className="font-serif font-bold text-sm text-[#1C1917]">
									{rev.correctHeroName}
								</span>
							</div>

							{/* Prompt Soal */}
							<p className="text-sm font-medium text-[#44403C]">{rev.prompt}</p>

							{/* Komparasi Jawaban */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
								<div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E0D3]">
									<span className="text-[#78716C] block mb-0.5">
										Jawaban Anda:
									</span>
									<span
										className={`font-bold ${
											rev.isCorrect ? "text-emerald-700" : "text-red-700"
										}`}
									>
										{rev.selectedHeroName}
									</span>
								</div>

								<div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
									<span className="text-amber-800 block mb-0.5">
										Jawaban Benar:
									</span>
									<span className="font-bold text-amber-950">
										{rev.correctHeroName}
									</span>
								</div>
							</div>

							{/* Trivia & Peran Kunci */}
							<div className="p-4 rounded-xl bg-[#FAF5EE] border border-[#E7DECD] text-xs space-y-2">
								<div className="flex items-center gap-1.5 font-bold text-[#78350F]">
									<Sparkles className="w-3.5 h-3.5" />
									<span>Fakta Menarik Arsip Sejarah:</span>
								</div>
								<p className="text-[#57534E] leading-relaxed">
									{rev.trivia || rev.keyAction}
								</p>

								{rev.famousQuote && (
									<div className="pt-2 border-t border-[#E7DECD] italic text-[#44403C] font-serif flex items-start gap-1.5">
										<Quote className="w-3.5 h-3.5 text-[#B91C1C] shrink-0 mt-0.5" />
										<span>"{rev.famousQuote}"</span>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
