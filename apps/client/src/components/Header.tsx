import { BookOpen, Sparkles } from "lucide-react";
import type React from "react";

interface HeaderProps {
	activeTab: "quiz" | "encyclopedia";
	setActiveTab: (tab: "quiz" | "encyclopedia") => void;
	isPlaying: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	activeTab,
	setActiveTab,
	isPlaying,
}) => {
	return (
		<header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E0D3] shadow-xs">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
				{/* Logo & Identitas */}
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#B91C1C] to-[#991B1B] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-[#7F1D1D]/20">
						<span>🇮🇩</span>
					</div>
					<div>
						<div className="flex items-center gap-2">
							<span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917] tracking-tight">
								Pahlawan<span className="text-[#B91C1C]">Kuis</span>
							</span>
							<span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
								Arsip Nasional
							</span>
						</div>
						<p className="text-xs text-[#78716C] hidden sm:block">
							Menelusuri Jejak Kejayaan Para Pejuang Kemerdekaan RI
						</p>
					</div>
				</div>

				{/* Navigasi Tab */}
				<div className="flex items-center gap-1 sm:gap-2 bg-[#F3EFE6] p-1 rounded-xl border border-[#E7E0D3]">
					<button
						type="button"
						onClick={() => setActiveTab("quiz")}
						className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
							activeTab === "quiz"
								? "bg-[#B91C1C] text-white shadow-xs"
								: "text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE4D7]"
						}`}
					>
						<Sparkles className="w-4 h-4" />
						<span>Kuis Sejarah</span>
						{isPlaying && (
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
						)}
					</button>

					<button
						type="button"
						onClick={() => setActiveTab("encyclopedia")}
						className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
							activeTab === "encyclopedia"
								? "bg-[#B91C1C] text-white shadow-xs"
								: "text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE4D7]"
						}`}
					>
						<BookOpen className="w-4 h-4" />
						<span>Galeri Tokoh (32)</span>
					</button>
				</div>
			</div>
		</header>
	);
};
