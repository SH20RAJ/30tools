import { getAllToolsByCategory, getAllCategories, Tool } from "@/lib/tools";
import { PremiumHero } from "@/components/landing/PremiumHero";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { GridPattern } from "@/components/shared/GridPattern";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
	title: "Free AI & Fun Generators Online - No Signup | 30tools",
	description: "Discover a massive collection of free AI image generators, bio creators, name generators, and fun online utilities. 100% free, no signup, and instant results.",
	keywords: "ai generators, bio generator, name generator, fun tools, free online generators, 30tools",
};

export default function GeneratorsHub() {
	const tools = getAllToolsByCategory("generators");
	const categories = getAllCategories().map(cat => ({ 
		label: cat.name, 
		href: cat.slug.startsWith("/") ? cat.slug : `/${cat.slug}` 
	}));

	return (
		<div className="min-h-screen bg-background">
			<AppleNavbar />
			<main>
				<PremiumHero 
					title="AI & Fun Generators" 
					subtitle="Generate anything from stunning AI art to professional social bios instantly. Free, fast, and no registration required."
				/>
				
				<div className="container mx-auto px-4 py-16 max-w-7xl relative">
					<GridPattern className="opacity-20" />
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
						{tools.map((tool: Tool) => (
							<Link key={tool.id} href={tool.route}>
								<Card className="h-full hover:shadow-2xl hover:border-primary/50 transition-all group overflow-hidden bg-card/50 backdrop-blur-sm">
									<CardHeader className="pb-2">
										<CardTitle className="flex items-center justify-between">
											<span className="text-xl font-bold tracking-tight">{tool.name}</span>
											<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
											{tool.description}
										</p>
										{tool.popular && (
											<div className="mt-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
												<Sparkles className="w-3 h-3" /> Popular
											</div>
										)}
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
