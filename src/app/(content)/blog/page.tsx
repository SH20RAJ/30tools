import Link from "next/link";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { blogArticles } from "@/constants/content-pages";

export const metadata = {
	title: "Blog & Guides for Free Online Tools | 30tools",
	description:
		"Actionable guides, tool lists, and tutorials for SEO, developer workflows, and everyday online conversion tasks.",
	keywords:
		"30tools blog, free online tools guides, seo tutorials, json guides, converter tutorials, no signup tools",
	alternates: {
		canonical: "https://30tools.com/blog",
	},
	openGraph: {
		title: "Blog & Guides for Free Online Tools | 30tools",
		description:
			"Read practical guides that link directly to free tools you can use instantly.",
		url: "https://30tools.com/blog",
		type: "website",
		images: [{ url: "/og-image.jpg" }],
	},
	robots: { index: true, follow: true },
};

export default function BlogPage() {
	const sortedArticles = [...blogArticles].sort((a, b) =>
		new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	const featuredGuides = [
		{ slug: "best-free-tools-for-students", label: "Best free tools for students" },
		{ slug: "tools-for-developers", label: "Tools for developers" },
		{ slug: "seo-tools-free-online", label: "SEO tools free online" },
		{ slug: "ai-tools-alternatives-free", label: "AI tools alternatives free" },
	];

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			<AppleNavbar />
			<main className="flex-1">
				<section className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
					<div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
							Content Engine
						</p>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">
							Blog Guides That Link Directly to Useful Tools
						</h1>
						<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
							Each guide is written for execution. Read the workflow, open the linked
							tools, and ship faster.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							{featuredGuides.map((guide) => (
								<Link
									key={guide.slug}
									href={`/${guide.slug}`}
									className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
								>
									{guide.label}
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{sortedArticles.map((article) => (
							<Link
								key={article.slug}
								href={`/blog/${article.slug}`}
								className="rounded-2xl border border-border/60 bg-card/50 p-6 hover:border-primary/40 transition-colors"
							>
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
									{article.date}
								</p>
								<h2 className="mt-3 text-xl font-semibold tracking-tight">
									{article.title}
								</h2>
								<p className="mt-3 text-muted-foreground">{article.description}</p>
								<p className="mt-4 text-sm font-medium text-primary">
									Read guide →
								</p>
							</Link>
						))}
					</div>
				</section>
			</main>
			<AppleFooter />
		</div>
	);
}
