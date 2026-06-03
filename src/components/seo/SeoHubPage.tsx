import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StructuredData from "@/components/shared/StructuredData";
import BreadcrumbsEnhanced from "@/components/seo/BreadcrumbsEnhanced";
import {
	seoOpportunities,
	type SeoOpportunity,
} from "@/data/seo-opportunities";
import { SITE_CONFIG } from "@/constants/config";

export type SeoHubPageProps = {
	title: string;
	description: string;
	route: string;
	categoryNames: string[];
	guideTitle: string;
	guidePoints: string[];
	faqs: { question: string; answer: string }[];
};

function itemListSchema(route: string, items: SeoOpportunity[]) {
	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.h1,
			url: `${SITE_CONFIG.siteUrl}${item.route}`,
		})),
		url: `${SITE_CONFIG.siteUrl}${route}`,
	};
}

export default function SeoHubPage({
	title,
	description,
	route,
	categoryNames,
	guideTitle,
	guidePoints,
	faqs,
}: SeoHubPageProps) {
	const items = seoOpportunities.filter((item) => categoryNames.includes(item.category));
	const topItems = [...items].sort((a, b) => a.priority - b.priority).slice(0, 18);
	const schema = itemListSchema(route, topItems);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<StructuredData />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
				}}
			/>
			<main className="container mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-12">
				<BreadcrumbsEnhanced
					customBreadcrumbs={[{ name: title, url: route }]}
				/>
				<section className="max-w-3xl space-y-5">
					<Badge variant="secondary" className="rounded-md">SEO Hub</Badge>
					<h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
						{title}
					</h1>
					<p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
						{description}
					</p>
				</section>

				<section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{topItems.map((item) => (
						<Link
							key={item.slug}
							href={item.route}
							className="group rounded-md border border-border/60 bg-card/40 p-5 transition-colors hover:border-primary/30"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<Badge variant="outline" className="mb-3 rounded-md">
										{item.difficulty} difficulty
									</Badge>
									<h2 className="text-lg font-bold group-hover:text-primary">
										{item.h1}
									</h2>
									<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
										{item.metaDescription}
									</p>
								</div>
								<ArrowRight className="mt-8 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
							</div>
						</Link>
					))}
				</section>

				<section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
					<Card className="rounded-md border-border/60">
						<CardHeader>
							<CardTitle className="text-2xl">{guideTitle}</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3 text-muted-foreground">
								{guidePoints.map((point) => (
									<li key={point} className="flex gap-3">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className="rounded-md border-border/60">
						<CardHeader>
							<CardTitle className="text-2xl">Questions</CardTitle>
						</CardHeader>
						<CardContent className="space-y-5">
							{faqs.map((faq) => (
								<div key={faq.question}>
									<h3 className="font-semibold">{faq.question}</h3>
									<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
										{faq.answer}
									</p>
								</div>
							))}
						</CardContent>
					</Card>
				</section>

				<section className="rounded-md border border-border/60 bg-muted/20 p-6">
					<h2 className="text-2xl font-bold">Useful Internal Links</h2>
					<div className="mt-4 flex flex-wrap gap-3">
						<Link className="rounded-md border px-3 py-2 text-sm hover:border-primary/40" href="/pro">30tools Pro</Link>
						<Link className="rounded-md border px-3 py-2 text-sm hover:border-primary/40" href="/api">30tools API</Link>
						<Link className="rounded-md border px-3 py-2 text-sm hover:border-primary/40" href="/advertise">Advertise</Link>
						<Link className="rounded-md border px-3 py-2 text-sm hover:border-primary/40" href="/services">Hire Us</Link>
					</div>
				</section>
			</main>
		</div>
	);
}
