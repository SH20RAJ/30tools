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

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{displayTools.map((tool: any) => (
				<Link
					key={tool.id}
					href={tool.route}
					className="group flex flex-col p-6 bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 shadow-xl transition-all duration-500 no-underline h-full"
				>
					<div className="flex items-start justify-between mb-6">
						<span className="text-[10px] font-semibold uppercase tracking-wider text-[#1d1d1f]/40 dark:text-white/40">
							{tool.category}
						</span>
						{tool.popular && (
							<span className="text-[10px] font-semibold uppercase tracking-wider bg-[#0071e3]/10 text-[#0071e3] px-2 py-0.5 ">
								Popular
							</span>
						)}
					</div>

					<h3 className="font-semibold text-lg mb-2 text-[#1d1d1f] dark:text-white group-hover:text-[#0071e3] transition-colors line-clamp-1">
						{tool.name}
					</h3>
					<p className="text-sm text-[#1d1d1f]/60 dark:text-white/60 line-clamp-2 mb-6 flex-grow leading-relaxed">
						{tool.description}
					</p>

					<div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5 dark:border-white/5">
						<div className="flex items-center text-[12px] font-medium text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity">
							Open Tool <ArrowRight className="w-3 h-3 ml-1" />
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
