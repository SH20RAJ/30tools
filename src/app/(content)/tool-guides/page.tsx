import Link from "next/link";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { getAllCategories } from "@/lib/tools";

export const metadata = {
	title: "Free Tool Guides by Category | 30tools",
	description:
		"Browse free tool guides for every category on 30tools. Find the best image, PDF, SEO, developer, downloader, and utility tools online.",
	keywords:
		"free tool guides, online tool categories, 30tools guide, best online tools, tool category pages",
	alternates: {
		canonical: "https://30tools.com/tool-guides",
	},
	openGraph: {
		title: "Free Tool Guides by Category | 30tools",
		description:
			"Browse curated category guides for image, PDF, video, audio, developer, SEO, and more free online tools.",
		url: "https://30tools.com/tool-guides",
		type: "website",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function ToolGuidesIndexPage() {
	const categories = getAllCategories();

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			<AppleNavbar />
			<main className="flex-1">
				<section className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
					<div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
							Tool Guides
						</p>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">
							Free Tool Guides by Category
						</h1>
						<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
							Explore every category of tools on 30tools with quick category guides and direct links to the best free online workflows.
						</p>
					</div>
				</section>

				<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
					<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
						{categories.map((category) => (
							<Link
								key={category.slug}
								href={`/tool-guides/${category.slug}`}
								className="group rounded-3xl border border-border/60 bg-card/50 p-6 transition-all hover:shadow-xl hover:border-primary/40"
							>
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
									{category.name}
								</p>
								<h2 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-primary">
									Explore {category.name}
								</h2>
								<p className="mt-4 text-muted-foreground leading-relaxed line-clamp-4">
									{category.description}
								</p>
								<p className="mt-6 text-sm font-medium text-primary">Browse {category.tools.length} tools →</p>
							</Link>
						))}
					</div>
				</section>
			</main>
			<AppleFooter />
		</div>
	);
}
