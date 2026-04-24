import Link from "next/link";
import { getToolByRoute } from "@/lib/tools";
import type { CuratedContentPage as CuratedContentPageType } from "@/constants/content-pages";

interface CuratedContentPageProps {
	page: CuratedContentPageType;
	baseUrl: string;
}

export default function CuratedContentPage({
	page,
	baseUrl,
}: CuratedContentPageProps) {
	const sectionsWithTools = page.sections.map((section) => ({
		...section,
		tools: section.toolRoutes
			.map((route) => getToolByRoute(route))
			.filter(Boolean),
	}));

	const relatedPages = page.relatedSlugs;

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: page.faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			<main className="flex-1">
				<section className="border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent">
					<div className="container mx-auto max-w-6xl px-4 py-14 md:py-20">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
							Curated Guide
						</p>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl">
							{page.h1}
						</h1>
						<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
							{page.intro}
						</p>
					</div>
				</section>

				<div className="container mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10">
					{sectionsWithTools.map((section) => (
						<section
							key={section.title}
							className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8"
						>
							<h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
							<p className="mt-3 text-muted-foreground leading-relaxed">
								{section.description}
							</p>

							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{section.tools.map((tool) => (
									<Link
										key={tool!.route}
										href={tool!.route}
										className="group rounded-xl border border-border/70 bg-background p-4 transition-colors hover:border-primary/40"
									>
										<p className="font-medium group-hover:text-primary transition-colors">
											{tool!.name}
										</p>
										<p className="text-sm text-muted-foreground mt-2 line-clamp-2">
											{tool!.description}
										</p>
									</Link>
								))}
							</div>
						</section>
					))}

					<section className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
						<h2 className="text-2xl font-semibold tracking-tight">Common Questions</h2>
						<div className="mt-6 space-y-5">
							{page.faqs.map((faq) => (
								<div key={faq.question}>
									<h3 className="font-medium">{faq.question}</h3>
									<p className="text-muted-foreground mt-2">{faq.answer}</p>
								</div>
							))}
						</div>
					</section>

					{relatedPages.length > 0 && (
						<section className="rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
							<h2 className="text-2xl font-semibold tracking-tight">Related Guides</h2>
							<div className="mt-5 flex flex-wrap gap-3">
								{relatedPages.map((slug) => (
									<Link
										key={slug}
										href={`/${slug}`}
										className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
									>
										/{slug}
									</Link>
								))}
							</div>
						</section>
					)}
				</div>
			</main>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "CollectionPage",
						name: page.h1,
						description: page.description,
						url: `${baseUrl}/${page.slug}`,
					}),
				}}
			/>
		</div>
	);
}