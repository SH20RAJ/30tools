import { getAllToolsByCategory, getAllCategories, Tool } from "@/lib/tools";
import { PremiumHero } from "@/components/landing/PremiumHero";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { GridPattern } from "@/components/shared/GridPattern";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, ArrowRight } from "lucide-react";

export const metadata = {
	title: "Free Developer Tools Online - Essential Utilities | 30tools",
	description: "Professional suite of free developer tools. JSON formatters, base64 encoders, hash generators, and API testers. All tools run locally in your browser for maximum privacy.",
	keywords: "developer tools, json formatter, base64 encoder, api tester, online dev tools, 30tools",
};

export default function DeveloperHub() {
	const tools = getAllToolsByCategory("developer");
	const categories = getAllCategories().map(cat => ({ 
		label: cat.name, 
		href: cat.slug.startsWith("/") ? cat.slug : `/${cat.slug}` 
	}));

	return (
		<div className="min-h-screen bg-background">
			<AppleNavbar />
			<main>
				<PremiumHero 
					title="Developer Utilities" 
					subtitle="Professional-grade tools for modern workflows. Fast, private, and 100% browser-based processing for all your coding needs."
				/>
				
				<div className="container mx-auto px-4 py-16 max-w-7xl relative">
					<GridPattern className="opacity-10" />
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
						{tools.map((tool: Tool) => (
							<Link key={tool.id} href={tool.route}>
								<Card className="h-full hover:shadow-2xl hover:border-primary/50 transition-all group overflow-hidden bg-card/50 backdrop-blur-sm border-border/40">
									<CardHeader className="pb-2">
										<CardTitle className="flex items-center justify-between">
											<span className="text-xl font-bold tracking-tight">{tool.name}</span>
											<Terminal className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
											{tool.description}
										</p>
										<div className="mt-4 flex items-center text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest gap-1">
											Open Tool <ArrowRight className="w-3 h-3" />
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
