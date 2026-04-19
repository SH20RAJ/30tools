import Link from "next/link";
import {
	Image as ImageIcon,
	FileText,
	Video,
	Download,
	Music,
	Settings,
	Code,
	Sparkles,
	Search,
	ChevronRight
} from "lucide-react";

const iconMap = {
	image: <ImageIcon className="h-6 w-6" />,
	pdf: <FileText className="h-6 w-6" />,
	video: <Video className="h-6 w-6" />,
	downloaders: <Download className="h-6 w-6" />,
	audio: <Music className="h-6 w-6" />,
	utilities: <Settings className="h-6 w-6" />,
	developer: <Code className="h-6 w-6" />,
	generators: <Sparkles className="h-6 w-6" />,
	seo: <Search className="h-6 w-6" />,
};

export function ToolDirectory({ categories = [], lang = "en" }) {
	return (
		<div className="space-y-32">
			{categories.map((category) => (
				<section key={category.key} className="relative">
					<div className="mb-12 flex items-center gap-4 border-b border-border/40 pb-6">
						<div className="p-3 rounded-2xl bg-primary/10 text-primary">
							{iconMap[category.key] || <Settings className="h-6 w-6" />}
						</div>
						<div>
							<h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
								{category.name}
							</h2>
							<p className="text-lg text-muted-foreground font-normal">
								{category.description}
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
						{category.tools.map((tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="group flex flex-col justify-between p-6 md:p-8 bg-card border border-border/60 rounded-3xl-off hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:border-primary/40 hover:-transpace-y-1 transition-all duration-500 no-underline h-full relative overflow-hidden"
							>
								{/* Subtle Gradient Glow on Hover */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

								<div className="relative z-10">
									<h3 className="text-xl md:text-2xl font-bold text-card-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
										{tool.name}
									</h3>
									{tool.description && (
										<p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
											{tool.description}
										</p>
									)}
								</div>

								<div className="mt-8 text-primary text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all relative z-10">
									Open Tool <ChevronRight className="h-4 w-4" />
								</div>
							</Link>
						))}
					</div>
				</section>
			))}
		</div>
	);
}

