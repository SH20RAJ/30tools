import { ToolDirectory } from "@/components/landing/ToolDirectory";
import toolsData from "@/constants/tools.json";

export const metadata = {
	title: "Search All Tools - Free Online Tools - No Signup | 30tools",
	description: "Search and browse our collection of 300+ free online tools. 100% free, no signup required.",
};

export default async function SearchPage({ searchParams }) {
	const params = await searchParams;
	const query = params.q?.toLowerCase() || "";
	const categoryKey = params.category || "";

	const categories = Object.entries(toolsData.categories || {}).map(([key, cat]) => ({
		key,
		name: cat.name,
		description: cat.description,
		tools: cat.tools || [],
	}));

	let filteredCategories = categories;

	if (categoryKey && categoryKey !== "all") {
		filteredCategories = categories.filter((cat) => cat.key === categoryKey);
	}

	if (query) {
		filteredCategories = filteredCategories.map((cat) => ({
			...cat,
			tools: cat.tools.filter((tool) => 
				tool.name.toLowerCase().includes(query) || 
				tool.description.toLowerCase().includes(query)
			),
		})).filter((cat) => cat.tools.length > 0);
	}

	return (
		<main className="container mx-auto px-4 py-16">
			<div className="mb-12">
				<h1 className="text-4xl font-bold mb-4">
					{categoryKey && categoryKey !== "all" 
						? `${toolsData.categories[categoryKey]?.name || "Search Results"}`
						: "Search All Tools"}
				</h1>
				{query && (
					<p className="text-muted-foreground">
						Showing results for "{query}"
					</p>
				)}
			</div>

			{filteredCategories.length > 0 ? (
				<ToolDirectory categories={filteredCategories} />
			) : (
				<div className="text-center py-24 border border-dashed rounded-lg">
					<p className="text-xl text-muted-foreground">No tools found matching your search.</p>
				</div>
			)}
		</main>
	);
}
