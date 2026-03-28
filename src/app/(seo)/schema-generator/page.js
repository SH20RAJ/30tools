import Link from "next/link";
import { AuthorBio } from "@/components/seo";
import SchemaGenerator from "@/components/tools/seo/SchemaGenerator";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("schema-generator", "seo", {
	title: "Schema Markup Generator | Free JSON-LD Tool | 30Tools",
	description:
		"Generate JSON-LD structured data for FAQ, HowTo, software, and other rich result types without writing schema by hand.",
	image: "/og-images/schema-generator.jpg",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
});

const jsonLdSchemas = {
	webApp: generateToolJsonLd("schema-generator", "seo", {
		name: "Schema Markup Generator",
		description:
			"Generate JSON-LD structured data for FAQ, HowTo, software, and other rich result types without writing schema by hand.",
		extra: {
			applicationCategory: "BusinessApplication",
		},
	}),
};

const AdUnit = () => (
	<div className="my-6 flex justify-center">
		<ins
			className="adsbygoogle"
			style={{ display: "block" }}
			data-ad-format="autorelaxed"
			data-ad-client="ca-pub-1828915420581549"
			data-ad-slot="4669751596"
		></ins>
	</div>
);

export default async function SchemaGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return (
		<>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.webApp),
				}}
			/>

			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="max-w-6xl mx-auto">
					<nav aria-label="Breadcrumb" className="mb-8">
						<ol className="flex items-center space-x-2 text-sm text-muted-foreground">
							<li>
								<Link href="/" className="hover:text-primary">
									Home
								</Link>
							</li>
							<li>/</li>
							<li>
								<Link href="/#seo-tools" className="hover:text-primary">
									SEO Tools
								</Link>
							</li>
							<li>/</li>
							<li className="text-foreground font-medium">Schema Generator</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
							Schema Markup Generator
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
							Generate JSON-LD structured data for rich results, search features,
							and cleaner machine-readable markup without writing schema by hand.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>📋 JSON-LD</span>
							<span>⭐ Rich Snippets</span>
							<span>🔍 Better SEO</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<SchemaGenerator />
					</div>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							Schema Types We Support
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									icon: "📰",
									title: "Article",
									desc: "Blog posts, news articles, and content",
								},
								{
									icon: "🛍️",
									title: "Product",
									desc: "E-commerce products with pricing",
								},
								{
									icon: "❓",
									title: "FAQ",
									desc: "Frequently asked questions",
								},
								{
									icon: "🏢",
									title: "Organization",
									desc: "Business and company info",
								},
								{
									icon: "👤",
									title: "Person",
									desc: "Personal profiles and authors",
								},
								{
									icon: "📍",
									title: "Local Business",
									desc: "Physical business locations",
								},
								{
									icon: "⭐",
									title: "Review",
									desc: "Product and service reviews",
								},
								{
									icon: "📅",
									title: "Event",
									desc: "Events with dates and locations",
								},
							].map((f, i) => (
								<div
									key={i}
									className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
								>
									<span className="text-4xl mb-4 block">{f.icon}</span>
									<h3 className="text-lg font-semibold mb-2">{f.title}</h3>
									<p className="text-sm text-muted-foreground">{f.desc}</p>
								</div>
							))}
						</div>
					</section>

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							Frequently Asked Questions
						</h2>
						<div className="space-y-4 max-w-4xl mx-auto">
							{[
								{
									q: "What is schema markup?",
									a: "Schema markup is structured data that helps search engines understand your content. It can enable rich snippets in search results like ratings, FAQs, and product information.",
								},
								{
									q: "What is JSON-LD?",
									a: "JSON-LD (JavaScript Object Notation for Linked Data) is the recommended format for schema markup. It's easy to implement and doesn't interfere with your page content.",
								},
								{
									q: "How do I add schema to my website?",
									a: "Copy the generated JSON-LD code and paste it in the <head> or <body> section of your HTML page, wrapped in <script type='application/ld+json'> tags.",
								},
								{
									q: "Does schema markup improve SEO?",
									a: "Yes! Schema markup helps search engines understand your content better, can improve click-through rates with rich snippets, and is a ranking factor for some search features.",
								},
								{
									q: "Is this tool free?",
									a: "Yes, our schema generator is 100% free with no limits.",
								},
							].map((faq, i) => (
								<details
									key={i}
									className="bg-card rounded-xl border border-border p-4 group"
								>
									<summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
										{faq.q}
										<span className="text-muted-foreground group-open:rotate-180 transition-transform">
											▼
										</span>
									</summary>
									<p className="mt-4 text-muted-foreground">{faq.a}</p>
								</details>
							))}
						</div>
					</section>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
							Related SEO Tools
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
							{[
								{
									href: "/meta-tags-generator",
									icon: "🏷️",
									title: "Meta Tags Generator",
									desc: "Create SEO meta tags",
								},
								{
									href: "/robots-txt-generator",
									icon: "🤖",
									title: "Robots.txt Generator",
									desc: "Control crawler access",
								},
								{
									href: "/sitemap-generator",
									icon: "🗺️",
									title: "Sitemap Generator",
									desc: "Create XML sitemaps",
								},
								{
									href: "/google-keyword-research",
									icon: "🔑",
									title: "Keyword Research",
									desc: "Find keywords",
								},
							].map((tool, i) => (
								<Link
									key={i}
									href={tool.href}
									className="group p-5 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
								>
									<div className="flex items-center gap-3 mb-2">
										<span className="text-2xl">{tool.icon}</span>
										<h3 className="font-semibold group-hover:text-primary transition-colors">
											{tool.title}
										</h3>
									</div>
									<p className="text-sm text-muted-foreground">{tool.desc}</p>
								</Link>
							))}
						</div>
					</section>
					<AuthorBio author="30Tools SEO Engineering Team" />
				</div>
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						6,
					),
				}}
			/>
		</>
	);
}
