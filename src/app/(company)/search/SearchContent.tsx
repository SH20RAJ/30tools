"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight, Sparkles, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

function SearchResults() {
	const searchParams = useSearchParams();
	const initialQuery = searchParams.get("q") || "";
	
	const [query, setQuery] = useState(initialQuery);
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeCategory, setActiveCategory] = useState("all");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchResults = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&category=${activeCategory}`);
				const data = await res.json();
				setResults(data.results || []);
				if (data.categories) setCategories(data.categories);
			} catch (error) {
				console.error("Search failed:", error);
			} finally {
				setLoading(false);
			}
		};

		const debounce = setTimeout(fetchResults, 300);
		return () => clearTimeout(debounce);
	}, [query, activeCategory]);

	return (
		<div className="container mx-auto px-4 py-12 max-w-6xl space-y-12">
			{/* Search Header */}
			<div className="space-y-6 text-center max-w-3xl mx-auto">
				<h1 className="text-4xl md:text-6xl font-black tracking-tighter">
					Search <span className="text-primary">30tools</span>
				</h1>
				<p className="text-xl text-muted-foreground">
					Find exactly what you need among our 700+ professional tools.
				</p>
				
				<div className="relative max-w-2xl mx-auto">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
					<Input
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search tools (e.g. 'pdf converter', 'image compressor')..."
						className="pl-12 py-7 text-lg rounded-none border-2 border-primary/20 focus-visible:ring-primary focus-visible:border-primary transition-all shadow-xl"
					/>
					{query && (
						<button 
							onClick={() => setQuery("")}
							className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted"
						>
							<X className="h-4 w-4" />
						</button>
					)}
				</div>
			</div>

			{/* Categories Filter */}
			<div className="flex flex-wrap items-center justify-center gap-2">
				<Badge 
					variant={activeCategory === "all" ? "default" : "outline"}
					className="cursor-pointer px-4 py-1.5 rounded-none uppercase font-bold text-[10px] tracking-widest"
					onClick={() => setActiveCategory("all")}
				>
					All Tools
				</Badge>
				{categories.map((cat) => (
					<Badge 
						key={cat}
						variant={activeCategory === cat ? "default" : "outline"}
						className="cursor-pointer px-4 py-1.5 rounded-none uppercase font-bold text-[10px] tracking-widest"
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</Badge>
				))}
			</div>

			{/* Results Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{loading ? (
					Array.from({ length: 6 }).map((_, i) => (
						<Card key={i} className="rounded-none border-border/40 overflow-hidden">
							<CardContent className="p-6 space-y-4">
								<div className="h-6 w-3/4 bg-muted animate-pulse" />
								<div className="h-4 w-full bg-muted animate-pulse" />
								<div className="h-4 w-1/2 bg-muted animate-pulse" />
							</CardContent>
						</Card>
					))
				) : results.length > 0 ? (
					results.map((tool) => (
						<Link 
							key={tool.id} 
							href={tool.route}
							className="group relative bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 p-8 flex flex-col h-full hover:shadow-2xl hover:shadow-primary/5"
						>
							<div className="space-y-4 flex-1">
								<div className="flex items-start justify-between">
									<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
										{tool.name}
									</h3>
									{tool.popular && <Sparkles className="h-5 w-5 text-primary" />}
								</div>
								<p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
									{tool.description}
								</p>
							</div>
							
							<div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between text-xs font-black uppercase tracking-widest">
								<span className="text-muted-foreground/60">{tool.categoryName || tool.categorySlug}</span>
								<div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
									Open Tool <ArrowRight className="h-4 w-4" />
								</div>
							</div>
						</Link>
					))
				) : (
					<div className="col-span-full py-20 text-center space-y-4">
						<div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
							<Search className="h-10 w-10 text-muted-foreground" />
						</div>
						<h3 className="text-2xl font-bold">No tools found</h3>
						<p className="text-muted-foreground max-w-sm mx-auto">
							We couldn't find any tools matching "{query}". Try different keywords or browse our categories.
						</p>
						<button 
							onClick={() => { setQuery(""); setActiveCategory("all"); }}
							className="text-primary font-bold hover:underline"
						>
							Clear all filters
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default function SearchContent() {
	return (
		<Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading Search...</div>}>
			<SearchResults />
		</Suspense>
	);
}
