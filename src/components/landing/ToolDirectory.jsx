"use client";

import {
	Code,
	Download,
	FileText,
	Image,
	LayoutGrid,
	Music,
	Search,
	Settings,
	Shield,
	Sparkles,
	Star,
	Video,
	Zap,
} from "lucide-react";
import Link from "next/link";

const ICON_MAP = {
	ImageIcon: Image,
	LayoutGridIcon: LayoutGrid,
	SearchIcon: Search,
	StarIcon: Star,
	UsersIcon: Star,
	ShieldCheckIcon: Shield,
	ZapIcon: Zap,
	pdf: FileText,
	video: Video,
	image: Image,
	downloaders: Download,
	audio: Music,
	utilities: Settings,
	developer: Code,
	generators: Sparkles,
	seo: Search,
};

export function ToolDirectory({ categories = [], lang = "en" }) {
	return (
		<div className="py-24 space-y-32">
			{categories.map((category) => (
				<section key={category.key} className="scroll-mt-24">
					<div className="flex flex-col items-center mb-16 text-center space-y-4">
						<h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
							{category.name}
						</h2>
						<div className="w-24 h-1.5 bg-primary rounded-full" />
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{category.tools.map((tool) => {
							const Icon =
								ICON_MAP[tool.icon] ||
								ICON_MAP[category.iconKey] ||
								ICON_MAP[category.key] ||
								LayoutGrid;
							return (
								<Link
									key={tool.id}
									href={tool.route}
									className="flex items-center gap-5 p-6 rounded-[2rem] border border-border/60 bg-card hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group no-underline"
								>
									<div className="p-4 rounded-2xl bg-secondary/30 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
										<Icon className="w-6 h-6" />
									</div>
									<h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
										{tool.name}
									</h3>
								</Link>
							);
						})}
					</div>
				</section>
			))}
		</div>
	);
}
