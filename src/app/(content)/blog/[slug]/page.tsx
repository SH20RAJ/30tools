import Link from "next/link";
import { notFound } from "next/navigation";
import { AppleFooter } from "@/components/footers/AppleFooter";
import { AppleNavbar } from "@/components/navigation/AppleNavbar";
import { blogs, getBlogArticleBySlug } from "@/constants/blog-data";
import { getToolByRoute } from "@/lib/tools";

interface BlogArticlePageProps {
	params: { slug: string };
}

export async function generateStaticParams() {
	return blogs.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
	const { slug } = params;
	const article = getBlogArticleBySlug(slug);

	if (!article) {
		return {
			title: "Blog Article Not Found | 30tools",
			description: "The requested article was not found.",
		};
	}

	return {
		title: `${article.title} | 30tools`,
		description: article.description,
		keywords: [
			article.slug.split("-").join(" "),
			"free online tools",
			"30tools blog",
		].join(", "),
		alternates: {
			canonical: `https://30tools.com/blog/${article.slug}`,
		},
		openGraph: {
			title: article.title,
			description: article.description,
			url: `https://30tools.com/blog/${article.slug}`,
			type: "article",
			images: [{ url: "/og-image.jpg" }],
		},
		robots: { index: true, follow: true },
	};
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
	const { slug } = await params;
	const article = getBlogArticleBySlug(slug);

	if (!article) return notFound();

	const featuredTools = (article.featuredToolRoutes || [])
		.map((route) => getToolByRoute(route))
		.filter(Boolean);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: article.title,
		description: article.description,
		datePublished: article.date,
		dateModified: article.date,
		author: {
			"@type": "Organization",
			name: "30tools",
		},
		publisher: {
			"@type": "Organization",
			name: "30tools",
		},
		mainEntityOfPage: `https://30tools.com/blog/${article.slug}`,
	};

	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col">
			<AppleNavbar />
			<main className="flex-1">
				<article className="container mx-auto max-w-4xl px-4 py-14 md:py-20">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
						Blog Guide
					</p>
					<h1 className="text-3xl md:text-5xl font-bold tracking-tight">
						{article.title}
					</h1>
					<p className="mt-4 text-sm text-muted-foreground">
						Published {article.date} • {article.readTimeMinutes || 5} min read
					</p>
					<p className="mt-8 text-lg leading-relaxed text-muted-foreground">
						{article.intro || article.description}
					</p>

					<div className="mt-10 space-y-10">
						{(article.sections || []).map((section: any) => {
							const sectionTools = (section.toolRoutes || [])
								.map((route: string) => getToolByRoute(route))
								.filter(Boolean);

							return (
								<section key={section.heading}>
									<h2 className="text-2xl font-semibold tracking-tight">
										{section.heading}
									</h2>
									<div className="mt-4 space-y-4">
										{(section.paragraphs || []).map((paragraph: string) => (
											<p key={paragraph} className="text-muted-foreground leading-relaxed">
												{paragraph}
											</p>
										))}
									</div>

									{sectionTools.length > 0 && (
										<div className="mt-5 flex flex-wrap gap-3">
											{sectionTools.map((tool) => (
												<Link
													key={tool!.route}
													href={tool!.route}
													className="rounded-full border border-border/70 px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
												>
													{tool!.name}
												</Link>
											))}
										</div>
									)}
								</section>
							);
						})}
					</div>

					{(article.faqs || []).length > 0 && (
						<section className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
							<h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
							<div className="mt-6 space-y-5">
								{article.faqs.map((faq: any) => (
									<div key={faq.question}>
										<h3 className="font-medium">{faq.question}</h3>
										<p className="text-muted-foreground mt-2">{faq.answer}</p>
									</div>
								))}
							</div>
						</section>
					)}

					<section className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
						<h2 className="text-2xl font-semibold tracking-tight">Featured Tools</h2>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
							{featuredTools.map((tool) => (
								<Link
									key={tool!.route}
									href={tool!.route}
									className="rounded-xl border border-border/70 bg-background p-4 hover:border-primary/40 transition-colors"
								>
									<p className="font-medium">{tool!.name}</p>
									<p className="text-sm text-muted-foreground mt-2 line-clamp-2">
										{tool!.description}
									</p>
								</Link>
							))}
						</div>

						<div className="mt-6">
							<Link
								href="/blog"
								className="text-sm font-medium text-primary hover:underline"
							>
								See all guides
							</Link>
						</div>
					</section>
				</article>
			</main>
			<AppleFooter />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(articleSchema),
				}}
			/>
		</div>
	);
}