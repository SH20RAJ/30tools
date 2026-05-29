import SearchContent from "./SearchContent";
import { SITE_CONFIG } from "@/constants/config";
import toolsData from "@/constants/tools.json";

export const metadata = {
	title: "Free Search All Tools Online - No Signup | 30tools",
	description: "Search and browse our collection of 300+ free online tools. 100% free, no signup required.",
	keywords: "search online tools, free online tools, 30tools search, image tool search, pdf tool search, seo tools directory, developer utilities, search, free search, search online, 30tools, browser tools",
	alternates: {
		canonical: "https://30tools.com/search",
	},
	openGraph: {
		title: "Free Search All Tools Online - No Signup | 30tools",
		description: "Search and browse our collection of 300+ free online tools. 100% free, no signup required.",
		url: "https://30tools.com/search",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Search All Tools Online - No Signup | 30tools",
		description: "Search and browse our collection of 300+ free online tools. 100% free, no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function SearchPage() {
	const cats = (toolsData as any).categories || {};
	const categoryEntries: {
		key: string;
		name: string;
		slug: string;
		description: string;
		tools: any[];
	}[] = [];

	const enrichedTools: any[] = [];

	for (const [key, cat] of Object.entries(cats)) {
		const category = cat as any;
		const tools = (category.tools || []).map((tool: any) => ({
			...tool,
			categoryName: category.name,
			categorySlug: category.slug,
		}));
		enrichedTools.push(...tools);
		categoryEntries.push({
			key, // Use the actual object key (e.g. "image", "generators", "others")
			name: category.name,
			slug: category.slug,
			description: category.description || "",
			tools,
		});
	}

	// Filter out empty categories
	const populatedCategories = categoryEntries.filter(ce => ce.tools.length > 0);

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<main className="flex-1">
				<div className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
					{/* Search header — server-rendered, visible to crawlers */}
					<div className="space-y-6 text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-6xl font-black tracking-tighter">
							Search <span className="text-primary">30tools</span>
						</h1>
						<p className="text-xl text-muted-foreground">
							Find exactly what you need among our {SITE_CONFIG.toolCountString} professional tools.
						</p>
					</div>

					{/* 
						SearchContent handles ALL rendering: search input, filters, and tool grid.
						On first SSR/hydration it renders the full enriched tool list — crawlers see it,
						users can interact with it, and there's no duplicate content.
					*/}
					<SearchContent
						initialTools={enrichedTools}
						initialCategories={populatedCategories}
					/>
				</div>
			</main>
		</div>
	);
}
