import { Calendar, MapPin, Sparkles } from "lucide-react";
import type React from "react";
import type { Hero } from "shared";

interface HeroCardProps {
	hero: Hero;
	onSelect?: (hero: Hero) => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, onSelect }) => {
	const content = (
		<>
			<div className="space-y-4">
				{/* Top Row: Avatar & Metadata Daerah */}
				<div className="flex items-start justify-between gap-3">
					<div className="w-14 h-14 rounded-2xl bg-[#FAF5EE] border border-[#E7DECD] flex items-center justify-center text-3xl shadow-xs group-hover:scale-105 transition-transform">
						<span>{hero.avatarIcon}</span>
					</div>
					<div className="text-right">
						<span className="inline-block px-2.5 py-1 rounded-md bg-[#FAF5EE] text-[#78350F] text-[11px] font-bold uppercase tracking-wider border border-[#E7DECD]">
							{hero.island}
						</span>
						<div className="text-xs text-[#78716C] mt-1 flex items-center justify-end gap-1">
							<MapPin className="w-3 h-3 text-[#B91C1C]" />
							<span>{hero.originRegion}</span>
						</div>
					</div>
				</div>

				{/* Nama & Gelar */}
				<div className="text-left">
					<h3 className="font-serif font-bold text-lg sm:text-xl text-[#1C1917] group-hover:text-[#B91C1C] transition-colors leading-tight">
						{hero.name}
					</h3>
					{hero.knownAs && hero.knownAs !== hero.name && (
						<p className="text-xs text-[#78716C] italic font-serif">
							Dikenal: "{hero.knownAs}"
						</p>
					)}
					<p className="text-xs font-semibold text-[#B91C1C] mt-1 line-clamp-1">
						{hero.significanceTag}
					</p>
				</div>

				{/* Masa Hidup & Ringkasan */}
				<div className="flex items-center gap-2 text-xs text-[#78716C]">
					<Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
					<span>
						{hero.birthYear || "?"} – {hero.deathYear || "?"} ({hero.period})
					</span>
				</div>

				<p className="text-xs text-[#57534E] leading-relaxed line-clamp-3 text-left">
					{hero.summary}
				</p>

				{/* Kutipan Singkat jika ada */}
				{hero.famousQuote && (
					<div className="p-3 rounded-xl bg-[#FAF8F5] border-l-2 border-[#B91C1C] text-xs text-[#44403C] italic font-serif leading-relaxed line-clamp-2 text-left">
						"{hero.famousQuote}"
					</div>
				)}
			</div>

			{/* Footer: Trivia & Action Tag */}
			<div className="mt-4 pt-3 border-t border-[#F3EFE6] flex items-center justify-between text-[11px] text-[#78716C] w-full">
				<span className="flex items-center gap-1 text-amber-700 font-semibold truncate max-w-[200px]">
					<Sparkles className="w-3.5 h-3.5 shrink-0" />
					<span className="truncate">{hero.keyAction}</span>
				</span>
				<span className="text-[#B91C1C] font-bold group-hover:underline">
					Lihat Profil →
				</span>
			</div>
		</>
	);

	if (onSelect) {
		return (
			<button
				type="button"
				onClick={() => onSelect(hero)}
				className="bg-white rounded-2xl border border-[#E7E0D3] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer hover:border-[#B91C1C]/50 group text-left w-full"
			>
				{content}
			</button>
		);
	}

	return (
		<div className="bg-white rounded-2xl border border-[#E7E0D3] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
			{content}
		</div>
	);
};
