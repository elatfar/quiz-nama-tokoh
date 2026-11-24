import { BookOpen, Quote, Search, Sparkles, X } from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";
import type { Hero } from "shared";
import { HeroCard } from "./HeroCard";

interface HeroEncyclopediaProps {
	heroes: Hero[];
	onStartQuizWithCategory?: (category: string) => void;
}

export const HeroEncyclopedia: React.FC<HeroEncyclopediaProps> = ({
	heroes,
}) => {
	const [search, setSearch] = useState("");
	const [selectedIsland, setSelectedIsland] = useState<string>("all");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

	const islands = [
		{ id: "all", label: "Semua Wilayah" },
		{ id: "Jawa", label: "Jawa" },
		{ id: "Sumatera", label: "Sumatera" },
		{ id: "Sulawesi", label: "Sulawesi" },
		{ id: "Kepulauan Maluku", label: "Maluku" },
		{ id: "Papua", label: "Papua" },
		{ id: "Kepulauan Nusa Tenggara", label: "Bali & Nusa Tenggara" },
	];

	const categories = [
		{ id: "all", label: "Semua Kategori" },
		{ id: "revolusi_kemerdekaan", label: "Revolusi Kemerdekaan" },
		{ id: "perang_daerah", label: "Perang Daerah" },
		{ id: "diplomasi", label: "Diplomasi" },
		{ id: "pendidikan", label: "Pendidikan" },
		{ id: "emansipasi", label: "Emansipasi Wanita" },
		{ id: "bela_negara", label: "Bela Negara" },
		{ id: "pemikir_bangsa", label: "Pemikir Bangsa" },
	];

	const filteredHeroes = useMemo(() => {
		return heroes.filter((h) => {
			const matchesSearch =
				search.trim() === "" ||
				h.name.toLowerCase().includes(search.toLowerCase()) ||
				h.knownAs?.toLowerCase().includes(search.toLowerCase()) ||
				h.originRegion.toLowerCase().includes(search.toLowerCase()) ||
				h.significanceTag.toLowerCase().includes(search.toLowerCase());

			const matchesIsland =
				selectedIsland === "all" || h.island === selectedIsland;

			const matchesCategory =
				selectedCategory === "all" || h.category === selectedCategory;

			return matchesSearch && matchesIsland && matchesCategory;
		});
	}, [heroes, search, selectedIsland, selectedCategory]);

	return (
		<div className="max-w-6xl mx-auto py-8 sm:py-12 px-4 space-y-8">
			{/* Header Ensiklopedia */}
			<div className="text-center space-y-3">
				<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#E7DECD] text-[#78350F] text-xs font-semibold uppercase tracking-wider">
					<BookOpen className="w-4 h-4 text-[#B91C1C]" />
					<span>Galeri & Ensiklopedia Sejarah</span>
				</div>
				<h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
					32 Pahlawan Nasional Indonesia
				</h1>
				<p className="max-w-2xl mx-auto text-[#57534E] text-sm sm:text-base">
					Telusuri biografi, peran perjuangan, kutipan abadi, dan fakta sejarah
					menarik dari pahlawan bangsa dari berbagai penjuru kepulauan
					Nusantara.
				</p>
			</div>

			{/* Search & Filter Bar */}
			<div className="bg-white rounded-2xl border border-[#E7E0D3] p-4 sm:p-6 shadow-xs space-y-4">
				<div className="relative">
					<Search className="w-5 h-5 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Cari nama tokoh, daerah asal, gelar, atau julukan..."
						className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E7E0D3] text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#B91C1C] focus:ring-1 focus:ring-[#B91C1C]"
					/>
					{search && (
						<button
							type="button"
							onClick={() => setSearch("")}
							className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A8A29E] hover:text-[#1C1917]"
						>
							<X className="w-4 h-4" />
						</button>
					)}
				</div>

				{/* Filter Wilayah / Pulau */}
				<div className="space-y-1.5">
					<span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
						Wilayah Kepulauan:
					</span>
					<div className="flex flex-wrap gap-1.5">
						{islands.map((isl) => (
							<button
								key={isl.id}
								type="button"
								onClick={() => setSelectedIsland(isl.id)}
								className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
									selectedIsland === isl.id
										? "bg-[#B91C1C] text-white shadow-xs font-semibold"
										: "bg-[#F3EFE6] text-[#57534E] hover:bg-[#EAE4D7] border border-[#E7E0D3]"
								}`}
							>
								{isl.label}
							</button>
						))}
					</div>
				</div>

				{/* Filter Kategori */}
				<div className="space-y-1.5">
					<span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C]">
						Bidang Perjuangan:
					</span>
					<div className="flex flex-wrap gap-1.5">
						{categories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								onClick={() => setSelectedCategory(cat.id)}
								className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
									selectedCategory === cat.id
										? "bg-[#1C1917] text-white shadow-xs font-semibold"
										: "bg-[#F3EFE6] text-[#57534E] hover:bg-[#EAE4D7] border border-[#E7E0D3]"
								}`}
							>
								{cat.label}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Count & Info */}
			<div className="flex items-center justify-between text-xs text-[#78716C] px-1">
				<span>
					Menampilkan <strong>{filteredHeroes.length}</strong> dari{" "}
					{heroes.length} Pahlawan
				</span>
				{(search || selectedIsland !== "all" || selectedCategory !== "all") && (
					<button
						type="button"
						onClick={() => {
							setSearch("");
							setSelectedIsland("all");
							setSelectedCategory("all");
						}}
						className="text-[#B91C1C] hover:underline font-bold"
					>
						Reset Semua Filter
					</button>
				)}
			</div>

			{/* Grid Kartu Pahlawan */}
			{filteredHeroes.length === 0 ? (
				<div className="text-center py-16 bg-white rounded-2xl border border-[#E7E0D3] space-y-3">
					<div className="text-4xl">🔍</div>
					<h3 className="font-serif text-lg font-bold text-[#1C1917]">
						Tidak ada pahlawan yang sesuai kriteria
					</h3>
					<p className="text-xs text-[#78716C]">
						Coba ubah kata kunci pencarian atau reset filter wilayah dan bidang
						perjuangan.
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{filteredHeroes.map((hero) => (
						<HeroCard
							key={hero.id}
							hero={hero}
							onSelect={(h) => setSelectedHero(h)}
						/>
					))}
				</div>
			)}

			{/* Modal Detail Tokoh Pahlawan */}
			{selectedHero && (
				<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
					<div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-[#E7E0D3] shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleUp relative">
						{/* Close Button */}
						<button
							type="button"
							onClick={() => setSelectedHero(null)}
							className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E7E0D3] text-[#78716C] hover:text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer"
						>
							<X className="w-4 h-4" />
						</button>

						{/* Header Modal */}
						<div className="flex items-start gap-4 pr-8">
							<div className="w-16 h-16 rounded-2xl bg-[#FAF5EE] border border-[#E7DECD] flex items-center justify-center text-4xl shadow-xs shrink-0">
								<span>{selectedHero.avatarIcon}</span>
							</div>
							<div className="space-y-1">
								<h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] leading-tight">
									{selectedHero.name}
								</h2>
								{selectedHero.knownAs && (
									<p className="text-xs font-serif italic text-[#78716C]">
										Dikenal sebagai: "{selectedHero.knownAs}"
									</p>
								)}
								<p className="text-xs font-bold text-[#B91C1C]">
									{selectedHero.title}
								</p>
							</div>
						</div>

						{/* Metadata Chips */}
						<div className="flex flex-wrap gap-2 text-xs">
							<span className="px-3 py-1 rounded-md bg-[#FAF5EE] text-[#78350F] font-bold border border-[#E7DECD]">
								📍 {selectedHero.originRegion} ({selectedHero.island})
							</span>
							<span className="px-3 py-1 rounded-md bg-[#F3EFE6] text-[#57534E] font-semibold border border-[#E7E0D3]">
								⏳ {selectedHero.birthYear || "?"} –{" "}
								{selectedHero.deathYear || "?"} (Era {selectedHero.period})
							</span>
							<span className="px-3 py-1 rounded-md bg-[#FEF3C7] text-[#92400E] font-semibold border border-[#FDE68A]">
								🏷️ {selectedHero.significanceTag}
							</span>
						</div>

						{/* Ringkasan & Peran Kunci */}
						<div className="space-y-2">
							<h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
								Ikhtisar Biografi & Peran Kunci
							</h4>
							<p className="text-sm text-[#44403C] leading-relaxed">
								{selectedHero.summary}
							</p>
						</div>

						{/* Kutipan Bersejarah */}
						{selectedHero.famousQuote && (
							<div className="p-4 rounded-2xl bg-[#FAF5EE] border-l-4 border-[#B91C1C] space-y-1.5">
								<div className="flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] uppercase tracking-wider">
									<Quote className="w-3.5 h-3.5" />
									<span>Kutipan Bersejarah</span>
								</div>
								<p className="font-serif italic text-base text-[#292524] leading-relaxed">
									"{selectedHero.famousQuote}"
								</p>
							</div>
						)}

						{/* Petunjuk Sejarah Terkemuka */}
						<div className="space-y-2">
							<h4 className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
								Jejak Rekam Sejarah Penting:
							</h4>
							<div className="space-y-2">
								{selectedHero.clues.map((clue, idx) => (
									<div
										key={`${selectedHero.id}_modal_clue_${clue.substring(0, 10)}`}
										className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E0D3] text-xs text-[#44403C] flex items-start gap-2.5"
									>
										<span className="w-5 h-5 rounded-full bg-[#E7E0D3] text-[#78716C] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
											{idx + 1}
										</span>
										<span className="leading-relaxed">{clue}</span>
									</div>
								))}
							</div>
						</div>

						{/* Trivia Arsip */}
						<div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1.5">
							<div className="flex items-center gap-1.5 font-bold text-amber-800">
								<Sparkles className="w-3.5 h-3.5 text-amber-600" />
								<span>Fakta Unik Arsip Nasional:</span>
							</div>
							<p className="leading-relaxed">{selectedHero.trivia}</p>
						</div>

						{/* Tombol Footer */}
						<div className="pt-2 flex items-center justify-end gap-3">
							<button
								type="button"
								onClick={() => setSelectedHero(null)}
								className="px-5 py-2.5 rounded-xl bg-[#F3EFE6] hover:bg-[#EAE4D7] text-[#1C1917] font-semibold text-xs border border-[#E7E0D3] cursor-pointer"
							>
								Tutup
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
