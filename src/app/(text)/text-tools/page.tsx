import { getAllToolsByCategory, getAllCategories, Tool } from "@/lib/tools";
import { PremiumHero } from "@/components/landing/PremiumHero";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { GridPattern } from "@/components/shared/GridPattern";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Type, ArrowRight } from "lucide-react";

export const metadata = {
	title: "Free Text Tools Online - Format & Transform | 30tools",
	description: "Professional suite of free text tools. Case converters, word counters, text cleaners, and markdown editors. fast, secure, and browser-based text processing.",
	keywords: "text tools, word counter, case converter, text cleaner, online text tools, 30tools",
};

export default function TextHub() {
	const tools = getAllToolsByCategory("text");
	const categories = getAllCategories().map(cat => ({ 
		label: cat.name, 
		href: cat.slug.startsWith("/") ? cat.slug : `/${cat.slug}` 
	}));

	return (
		<div className="min-h-screen bg-background">
			<AppleNavbar />
			<main>
				<PremiumHero 
					title="Text Utilities" 
					subtitle="Fast and secure text transformation tools. Format, clean, and analyze your content instantly with our professional suite."
				/>
				
				<div className="container mx-auto px-4 py-16 max-w-7xl relative">
					<GridPattern className="opacity-10" />
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
						{tools.map((tool: Tool) => (
							<Link key={tool.id} href={tool.route}>
								<Card className="h-full hover:shadow-2xl hover:border-primary/50 transition-all group overflow-hidden bg-card/50 backdrop-blur-sm">
									<CardHeader className="pb-2">
										<CardTitle className="flex items-center justify-between">
											<span className="text-xl font-bold tracking-tight">{tool.name}</span>
											<Type className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
											{tool.description}
										</p>
										<div className="mt-4 flex items-center text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest gap-1">
											Process Text <ArrowRight className="w-3 h-3" />
										</div>
									</CardContent>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</main>
			<AppleFooter categories={categories} />
		</div>
	);
}
