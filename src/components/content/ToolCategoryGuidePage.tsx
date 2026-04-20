import Link from "next/link";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import type { Tool, Category } from "@/lib/tools";

interface ToolCategoryGuidePageProps {
	category: Category;
	relatedCategories: Category[];
}

export default function ToolCategoryGuidePage({ category, relatedCategories }: ToolCategoryGuidePageProps) {
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
							Best Free {category.name} Online
						</h1>
						<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
							{category.description} Explore the most useful free tools in this category, from beginner workflows to pro-level productivity.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							{relatedCategories.slice(0, 4).map((related) => (
								<Link
									key={related.slug}
									href={`/tool-guides/${related.slug}`}
									className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
								>
									{related.name}
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
					<div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
						<h2 className="text-2xl font-semibold tracking-tight">Why use {category.name} tools?</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							These tools help with the most common tasks in {category.name.toLowerCase()}. Each one is chosen for speed, reliability, and ease of use.
						</p>
						<div className="mt-6 grid gap-4 sm:grid-cols-2">
							{[
								`Fast access to ${category.name.toLowerCase()} workflows`,
								"No signup required for quick results",
								"Browser-first tools with responsive design",
							].map((item) => (
								<div key={item} className="rounded-2xl border border-border/70 bg-background p-4">
									<p className="font-medium">{item}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
					<h2 className="text-3xl font-bold tracking-tight">Top {category.name} tools</h2>
					<p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
						Browse the full list of tools in this category with quick access to each workflow.
					</p>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
						{category.tools.map((tool: Tool) => (
							<Link
								key={tool.id}
								href={tool.route}
								className="group rounded-2xl border border-border/70 bg-background p-5 transition-all hover:border-primary/40 hover:shadow-lg"
							>
								<div className="flex items-center justify-between gap-3">
									<p className="text-lg font-semibold group-hover:text-primary">
										{tool.name}
									</p>
									<span className="text-sm text-muted-foreground">{tool.category}</span>
								</div>
								<p className="mt-3 text-sm text-muted-foreground line-clamp-3">
									{tool.description}
								</p>
								{tool.extraSlugs?.length ? (
									<div className="mt-4 flex flex-wrap gap-2">
										{tool.extraSlugs.slice(0, 4).map((slug) => (
											<span key={slug} className="rounded-full border border-border/50 px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
											{slug.replace(/-/g, " ")}
										</span>
										))}
									</div>
								) : null}
							</Link>
						))}
					</div>
				</section>

				<section className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
					<div className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
						<h2 className="text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
						<div className="mt-6 space-y-5">
							{[
								{
									question: `Which ${category.name.toLowerCase()} tool should I try first?`,
									answer: `Start with a tool that matches your immediate need: compression, conversion, or editing. The first tools listed here are good entry points.`,
								},
								{
									question: `Can these ${category.name.toLowerCase()} tools be used without signup?`,
									answer: "Yes — all tools in this category are free to use online and do not require account creation.",
								},
								{
									question: `Do these tools work on mobile browsers?`,
									answer: "Most of them are designed to work responsively on phones and tablets as well as desktop browsers.",
								},
							].map((faq) => (
								<div key={faq.question}>
									<h3 className="font-medium">{faq.question}</h3>
									<p className="text-muted-foreground mt-2">{faq.answer}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<AppleFooter />
		</div>
	);
}
