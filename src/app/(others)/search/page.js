import { ToolDirectory } from "@/components/landing/ToolDirectory";
import toolsData from "@/constants/tools.json";
import { Input } from "@/components/ui/input";
import { Search, Grid, List } from "lucide-react";
import Link from "next/link";

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
				tool.description.toLowerCase().includes(query) ||
				tool.category?.toLowerCase().includes(query)
			),
		})).filter((cat) => cat.tools.length > 0);
	}

	const allCategories = [
		{ key: "all", name: "All Tools" },
		...categories.map(c => ({ key: c.key, name: c.name }))
	];

	return (
		<main className="container mx-auto px-4 py-12 max-w-6xl">
			<div className="flex flex-col items-center mb-12 text-center">
				<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
					{categoryKey && categoryKey !== "all"
						? `${toolsData.categories[categoryKey]?.name || "Search Results"}`
						: "Search Our Toolkit"}
				</h1>
				<p className="text-lg text-muted-foreground mb-8 max-w-2xl">
					Find the perfect tool for your task. Browse through our collection of {Object.values(toolsData.categories).reduce((acc, cat) => acc + (cat.tools?.length || 0), 0)}+ free online tools.
				</p>

				<form action="/search" method="GET" className="relative w-full max-w-2xl group">
					<div className="relative">
						<Search className="absolute left-4 top-1/2 -transpace-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
						<Input
							name="q"
							defaultValue={query}
							placeholder="What tool are you looking for?"
							className="pl-12 h-14 text-lg border-2 focus-visible:ring-0 focus-visible:border-primary transition-all shadow-sm"
						/>
						<button
							type="submit"
							className="absolute right-2 top-1/2 -transpace-y-1/2 bg-primary text-primary-foreground px-6 py-2 font-medium hover:opacity-90 transition-opacity"
						>
							Search
						</button>
					</div>
					<input type="hidden" name="category" value={categoryKey || "all"} />
				</form>

				<div className="flex flex-wrap justify-center gap-2 mt-8">
					{allCategories.slice(0, 8).map((cat) => (
						<Link
							key={cat.key}
							href={`/search?category=${cat.key}${query ? `&q=${query}` : ""}`}
							className={`px-4 py-2 text-sm font-medium transition-all ${(categoryKey === cat.key || (!categoryKey && cat.key === "all"))
									? "bg-primary text-primary-foreground shadow-md"
									: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
								}`}
						>
							{cat.name}
						</Link>
					))}
					{allCategories.length > 8 && (
						<Link
							href="/search"
							className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
						>
							More...
						</Link>
					)}
				</div>
			</div>

			<div className="flex items-center justify-between mb-8 pb-4 border-b">
				<div className="flex items-center gap-2">
					<h2 className="text-xl font-semibold">
						{query ? `Results for "${query}"` : "All Tools"}
					</h2>
					<span className="bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-bold">
						{filteredCategories.reduce((acc, cat) => acc + cat.tools.length, 0)} tools
					</span>
				</div>
			</div>

			{filteredCategories.length > 0 ? (
				<ToolDirectory categories={filteredCategories} />
			) : (
				<div className="text-center py-32 border-2 border-dashed bg-secondary/10">
					<div className="bg-secondary/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
						<Search className="h-8 w-8 text-muted-foreground" />
					</div>
					<h3 className="text-xl font-bold mb-2">No tools found</h3>
					<p className="text-muted-foreground mb-6">We couldn't find any tools matching your search criteria.</p>
					<Link
						href="/search"
						className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 font-bold hover:opacity-90 transition-all"
					>
						Browse All Tools
					</Link>
				</div>
			)}
		</main>
	);
}
