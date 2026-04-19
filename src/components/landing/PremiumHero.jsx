"use client";

import { Search, Sparkles, Zap, ShieldCheck, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PremiumHero({ title, subtitle, lang = "en" }) {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			router.push(`/search?q=${encodeURIComponent(query)}`);
		}
	};

	const trendingTools = [
		{ name: "YouTube Downloader", href: "/youtube-downloader" },
		{ name: "Image Compressor", href: "/image-compressor" },
		{ name: "PDF to Word", href: "/pdf-to-word" },
		{ name: "AI Image Generator", href: "/ai-image-generator" },
	];

	return (
		<div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
			{/* Background Ambient Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-none animate-pulse" />
				<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-none" />
			</div>

			<div className="max-w-4xl mx-auto text-center px-4">
				{/* Badge */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-8 animate-in">
					<Sparkles className="h-3 w-3" />
					<span>Discover 600+ Power Tools</span>
				</div>

				<h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]">
					{title}
				</h1>
				
				<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
					{subtitle}
				</p>

				{/* Search Discovery Engine */}
				<form 
					onSubmit={handleSearch}
					className="relative max-w-2xl mx-auto mb-8 group"
				>
					<div className="relative flex items-center">
						<Search className="absolute left-6 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
						<Input
							type="text"
							placeholder="Search for any tool (e.g. 'compress image', 'pdf', 'youtube')..."
							className="h-16 pl-16 pr-32 rounded-none bg-card border-border/50 text-lg shadow-2xl focus-visible:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button 
							type="submit"
							className="absolute right-2 h-12 px-6 rounded-none bg-primary hover:bg-primary/90 text-white font-medium"
						>
							Find Tool
						</Button>
					</div>
				</form>

				{/* Trending Pills */}
				<div className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-in" style={{ animationDelay: '200ms' }}>
					<span className="text-sm text-muted-foreground mr-2">Trending:</span>
					{trendingTools.map((tool) => (
						<a
							key={tool.name}
							href={tool.href}
							className="px-4 py-1.5 rounded-none bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all text-sm font-medium"
						>
							{tool.name}
						</a>
					))}
				</div>

				{/* Trust Badges */}
				<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
					<div className="flex items-center gap-2">
						<ShieldCheck className="h-5 w-5" />
						<span className="text-sm font-semibold uppercase tracking-widest">Privacy First</span>
					</div>
					<div className="flex items-center gap-2">
						<Zap className="h-5 w-5" />
						<span className="text-sm font-semibold uppercase tracking-widest">Lightning Fast</span>
					</div>
					<div className="flex items-center gap-2 px-2 py-1 rounded bg-foreground text-background">
						<span className="text-[10px] font-black uppercase tracking-tighter">100% Free</span>
					</div>
				</div>
			</div>
		</div>
	);
}
