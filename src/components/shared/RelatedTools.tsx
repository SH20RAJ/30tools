import {
	ArrowRight,
	Code,
	FileText,
	Image,
	Search,
	Video,
	Wrench,
} from "lucide-react";
import Link from "next/link";
import toolsData from "@/constants/tools.json";

interface RelatedToolsProps {
	currentToolId: string;
	categorySlug?: string;
	limit?: number;
}

const categoryIcons: Record<string, any> = {
	image: Image,
	video: Video,
	pdf: FileText,
	seo: Search,
	developer: Code,
	default: Wrench,
};

export default function RelatedTools({
	currentToolId,
	categorySlug,
	limit = 8,
}: RelatedToolsProps) {
	// Flatten tools for searching
	const allTools = Object.values(toolsData.categories).flatMap((cat: any) =>
		cat.tools.map((tool: any) => ({ ...tool, categoryName: cat.name })),
	);

	// Get current tool details
	const currentTool = allTools.find((t) => t.id === currentToolId);
	const currentCategory = currentTool?.category || categorySlug;

	// 1. Same category tools (exclude current)
	const sameCategory = allTools.filter(
		(t) => t.id !== currentToolId && t.category === currentCategory,
	);

	// 2. Popular tools from related categories
	const relatedCategories: Record<string, string[]> = {
		image: ["pdf", "video"],
		video: ["image", "audio"],
		pdf: ["image", "text"],
		seo: ["developer", "utilities"],
		developer: ["seo", "utilities"],
		utilities: ["developer", "seo"],
		text: ["pdf", "developer"],
		generators: ["video", "image"],
		audio: ["video", "utilities"],
	};

	const relatedCats =
		relatedCategories[currentCategory as keyof typeof relatedCategories] || [];
	const fromRelatedCats = allTools.filter(
		(t) =>
			t.id !== currentToolId &&
			t.category !== currentCategory &&
			relatedCats.includes(t.category),
	);

	// 3. Popular fallback
	const popularOthers = allTools.filter(
		(t) =>
			t.id !== currentToolId &&
			!sameCategory.find((sc) => sc.id === t.id) &&
			!fromRelatedCats.find((rc) => rc.id === t.id),
	);

	// Combine and dedupe
	const combined = [
		...sameCategory,
		...fromRelatedCats.sort(
			(a, b) => (b.popular === true ? 1 : 0) - (a.popular === true ? 1 : 0),
		),
		...popularOthers.sort(
			(a, b) => (b.popular === true ? 1 : 0) - (a.popular === true ? 1 : 0),
		),
	];

	const displayTools = combined.slice(0, limit);

	const getCategoryIcon = (cat: string) => {
		const Icon = categoryIcons[cat] || categoryIcons.default;
		return <Icon className="w-5 h-5" />;
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">Related Tools</h2>
				{categorySlug && (
					<Link
						href={`/tools/${categorySlug}`}
						className="text-sm text-primary hover:underline font-medium flex items-center gap-1"
					>
						View all {currentTool?.categoryName || categorySlug} tools
						<ArrowRight className="w-3 h-3" />
					</Link>
				)}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{displayTools.map((tool: any) => {
					const Icon = getCategoryIcon(tool.category);
					return (
						<Link
							key={tool.id}
							href={tool.route}
							className="group relative flex flex-col p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
						>
							<div className="flex items-start justify-between mb-3">
								<div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
									{Icon}
								</div>
								{tool.popular && (
									<span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded-full">
										Hot
									</span>
								)}
								{tool.seoMetrics?.kd && tool.seoMetrics.kd < 5 && (
									<span className="text-[10px] font-bold uppercase tracking-wider bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
										Easy Rank
									</span>
								)}
							</div>

							<h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-1">
								{tool.name}
							</h3>
							<p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
								{tool.description}
							</p>

							<div className="flex items-center justify-between mt-auto pt-2 border-t border-border/30">
								<span className="text-xs text-muted-foreground capitalize">
									{tool.category}
								</span>
								<div className="flex items-center text-xs font-medium text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
									Use Tool <ArrowRight className="w-3 h-3 ml-1" />
								</div>
							</div>

							{/* SEO Keywords Tooltip */}
							{tool.keywords && (
								<div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-4 flex items-center justify-center z-10">
									<p className="text-xs text-center text-muted-foreground">
										{tool.keywords.slice(0, 3).join(", ")}
									</p>
								</div>
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
