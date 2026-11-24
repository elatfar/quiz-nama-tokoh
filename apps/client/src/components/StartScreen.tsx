import {
	ArrowRight,
	BookOpen,
	Compass,
	Flame,
	Shield,
	Trophy,
	Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

interface StartScreenProps {
	onStartQuiz: (config: {
		mode: "kilat" | "standar" | "maraton";
		category?: string;
		questionCount: number;
	}) => void;
	onOpenEncyclopedia: () => void;
	highScore: number | null;
	lastRank: string | null;
}

export const StartScreen: React.FC<StartScreenProps> = ({
	onStartQuiz,
	onOpenEncyclopedia,
	highScore,
	lastRank,
}) => {
	const [mode, setMode] = useState<"kilat" | "standar" | "maraton">("standar");
	const [category, setCategory] = useState<string>("all");

	const modeConfigs = {
		kilat: {
			title: "Mode Kilat",
			questions: 5,
			icon: Zap,
			desc: "5 soal cepat untuk pemanasan wawasan sejarah singkat.",
			color: "from-amber-500/10 to-amber-500/5 text-amber-700 border-amber-300",
		},
		standar: {
			title: "Mode Standar",
			questions: 10,
			icon: Compass,
			desc: "10 soal terkurasi menantang lintas era & pulau Nusantara.",
			color: "from-red-600/10 to-red-600/5 text-[#B91C1C] border-[#B91C1C]/40",
		},
		maraton: {
			title: "Mode Maraton",
			questions: 20,
			icon: Flame,
			desc: "20 soal mendalam untuk calon Mahaguru Sejarah Sejati.",
			color:
				"from-emerald-600/10 to-emerald-600/5 text-emerald-800 border-emerald-300",
		},
	};

	const categories = [
		{ id: "all", label: "Seluruh Periode & Kategori" },
		{ id: "revolusi_kemerdekaan", label: "Revolusi 1945 & Proklamasi" },
		{ id: "perang_daerah", label: "Perang Daerah & Perlawanan Kolonial" },
		{ id: "diplomasi", label: "Diplomat & Negosiator Ulung" },
		{ id: "pendidikan", label: "Pelopor Pendidikan & Cendekia" },
		{ id: "emansipasi", label: "Srikandi & Emansipasi Perempuan" },
		{ id: "pemikir_bangsa", label: "Pemikir & Filsuf Republik" },
	];

	const handleStart = () => {
		onStartQuiz({
			mode,
			category: category === "all" ? undefined : category,
			questionCount: modeConfigs[mode].questions,
		});
	};

	return (
		<div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
			{/* Banner Hero Arsip Nasional */}
			<div className="text-center mb-10 space-y-4">
				<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#E7DECD] text-[#78350F] text-xs font-semibold uppercase tracking-wider shadow-xs">
					<Shield className="w-4 h-4 text-[#B91C1C]" />
					<span>Uji Pengetahuan Sejarah Bangsa</span>
				</div>

				<h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-tight">
					Kuis Tokoh <span className="text-[#B91C1C]">Pahlawan Nasional</span>{" "}
					Indonesia
				</h1>

				<p className="max-w-2xl mx-auto text-[#57534E] text-base sm:text-lg leading-relaxed">
					Buktikan kecintaan dan pemahamanmu terhadap para pejuang kemerdekaan.
					Kenali kutipan legendaris, taktik pertempuran, dan fakta unik 32 tokoh
					dari Sabang sampai Merauke.
				</p>

				{/* Highscore Badge jika ada */}
				{highScore !== null && (
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium">
						<Trophy className="w-4 h-4 text-amber-600" />
						<span>
							Rekor Tertinggi:{" "}
							<strong className="text-amber-800">{highScore} Poin</strong>{" "}
							{lastRank && `(${lastRank})`}
						</span>
					</div>
				)}
			</div>

			{/* Pengaturan Kuis */}
			<div className="bg-white rounded-2xl border border-[#E7E0D3] p-6 sm:p-8 shadow-xs space-y-8">
				{/* 1. Pilih Mode */}
				<div>
					<h3 className="text-xs uppercase font-bold tracking-wider text-[#78716C] mb-3">
						Langkah 1: Pilih Mode Kuis
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{(Object.keys(modeConfigs) as Array<keyof typeof modeConfigs>).map(
							(key) => {
								const item = modeConfigs[key];
								const isSelected = mode === key;
								const Icon = item.icon;
								return (
									<button
										key={key}
										type="button"
										onClick={() => setMode(key)}
										className={`text-left p-4 rounded-xl border-2 transition-all relative ${
											isSelected
												? `bg-linear-to-b ${item.color} shadow-sm ring-1 ring-[#B91C1C]/30`
												: "border-[#E7E0D3] hover:border-[#D5CBBE] bg-[#FAF8F5]/60"
										}`}
									>
										{isSelected && (
											<span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#B91C1C]" />
										)}
										<div className="flex items-center gap-2 mb-1.5">
											<Icon className="w-5 h-5" />
											<span className="font-bold text-base text-[#1C1917] font-serif">
												{item.title}
											</span>
										</div>
										<span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/80 border border-[#E7E0D3] text-[#78716C] inline-block mb-2">
											{item.questions} Soal • 20 Detik/Soal
										</span>
										<p className="text-xs text-[#57534E] leading-relaxed">
											{item.desc}
										</p>
									</button>
								);
							},
						)}
					</div>
				</div>

				{/* 2. Pilih Kategori */}
				<div>
					<h3 className="text-xs uppercase font-bold tracking-wider text-[#78716C] mb-3">
						Langkah 2: Pilih Fokus Kategori (Opsional)
					</h3>
					<div className="flex flex-wrap gap-2">
						{categories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								onClick={() => setCategory(cat.id)}
								className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
									category === cat.id
										? "bg-[#1C1917] text-white shadow-xs"
										: "bg-[#F3EFE6] text-[#57534E] hover:bg-[#EAE4D7] border border-[#E7E0D3]"
								}`}
							>
								{cat.label}
							</button>
						))}
					</div>
				</div>

				{/* 3. Aturan Poin & Bonus */}
				<div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E7E0D3] text-xs text-[#57534E] space-y-2">
					<div className="font-bold text-[#1C1917] flex items-center gap-1.5">
						<span>💡</span>
						<span>Sistem Penilaian & Bonus Patriot:</span>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[#78716C]">
						<div className="flex items-start gap-1.5">
							<span className="text-[#B91C1C] font-bold">100 Poin</span>
							<span>per jawaban yang tepat.</span>
						</div>
						<div className="flex items-start gap-1.5">
							<span className="text-amber-600 font-bold">+5 Poin/dtk</span>
							<span>bonus kecepatan jika menjawab kilat.</span>
						</div>
						<div className="flex items-start gap-1.5">
							<span className="text-emerald-600 font-bold">+20 Combo</span>
							<span>bonus multiplier streak beruntun.</span>
						</div>
					</div>
				</div>

				{/* Tombol Aksi Utama */}
				<div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
					<button
						type="button"
						onClick={handleStart}
						className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-linear-to-r from-[#B91C1C] to-[#991B1B] hover:from-[#991B1B] hover:to-[#7F1D1D] text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
					>
						<span>Mulai Ekspedisi Sejarah</span>
						<ArrowRight className="w-5 h-5" />
					</button>

					<button
						type="button"
						onClick={onOpenEncyclopedia}
						className="w-full sm:w-auto py-4 px-6 rounded-xl bg-[#F3EFE6] hover:bg-[#EAE4D7] text-[#1C1917] font-semibold text-sm flex items-center justify-center gap-2 border border-[#E7E0D3] transition-all cursor-pointer"
					>
						<BookOpen className="w-4 h-4 text-[#78716C]" />
						<span>Eksplorasi Galeri 32 Tokoh</span>
					</button>
				</div>
			</div>
		</div>
	);
};
