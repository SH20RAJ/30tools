"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PremiumHero({ title, subtitle = "" }) {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			router.push(`/search?q=${encodeURIComponent(query)}`);
		}
	};

	return (
		<div className="relative pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden flex flex-col justify-center items-center">
			{/* Background Ambient Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
				<div className="absolute top-0 left-[-10%] w-[35%] h-[35%] bg-primary/5 blur-[100px] rounded-none" />
				<div className="absolute bottom-0 right-[-10%] w-[35%] h-[35%] bg-secondary/5 blur-[100px] rounded-none" />
			</div>

			<div className="w-full max-w-3xl mx-auto text-center px-4">
				<h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 leading-[1.1] bg-gradient-to-b from-foreground to-foreground/80">
					{title}
				</h1>
				
				{/* Search Discovery Engine */}
				<form 
					onSubmit={handleSearch}
					className="relative w-full max-w-2xl mx-auto group animate-fade-in"
				>
					<div className="relative flex items-center shadow-lg border border-border/40 hover:border-border transition-all">
						<Search className="absolute left-6 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
						<Input
							type="text"
							placeholder="Search for any tool (e.g. 'compress image', 'pdf', 'youtube')..."
							className="h-16 pl-16 pr-32 rounded-none bg-card border-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0 transition-all placeholder:text-muted-foreground/50 w-full"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button 
							type="submit"
							className="absolute right-2 h-12 px-6 rounded-none bg-primary hover:bg-primary/95 text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
						>
							Find Tool
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
