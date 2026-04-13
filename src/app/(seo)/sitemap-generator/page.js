import Link from "next/link";
import SitemapGeneratorTool from "@/components/tools/seo/SitemapGeneratorTool";

export const metadata = {
	title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
	description:
		"SEO tools: Advanced Sitemap Generator. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your b",
	keywords: [
		"advanced sitemap generator",
		"advanced sitemap generator free",
		"advanced sitemap generator online",
		"advanced sitemap generator tool",
	],
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "Sitemap Generator",
	description:
		"Generate Process instantly with our free sitemap generator. Professional quality results, unlimited generations. Perfect for creators, developers & businesses.",
	url: "https://30tools.com/sitemap-generator",
	applicationCategory: "UtilityApplication",
	operatingSystem: "Any",
	permissions: "browser",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
	author: {
		"@type": "Organization",
		name: "30tools",
		url: "https://30tools.com",
	},
};

export default async function SitemapGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
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
							<li className="text-foreground font-medium">Sitemap Generator</li>
						</ol>
					</nav>

					<AdUnit />

					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
							Sitemap Generator
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
							Generate XML sitemaps to help search engines discover and crawl
							all pages on your website. Improve your SEO with proper site
							structure.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span>🗺️ XML Format</span>
							<span>🔍 SEO Friendly</span>
							<span>⚡ Fast</span>
							<span>🆓 100% Free</span>
						</div>
					</div>

					<AdUnit />

					<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 mb-16">
						<SitemapGeneratorTool />
					</div>

					<AdUnit />

					<section className="mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
							Why You Need a Sitemap
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{
									icon: "🔍",
									title: "Better Crawling",
									desc: "Help search engines discover all your pages",
								},
								{
									icon: "📈",
									title: "Faster Indexing",
									desc: "New pages get indexed more quickly",
								},
								{
									icon: "🗂️",
									title: "Site Structure",
									desc: "Show search engines your site hierarchy",
								},
								{
									icon: "📅",
									title: "Update Frequency",
									desc: "Tell crawlers when content changes",
								},
								{
									icon: "⭐",
									title: "Priority",
									desc: "Indicate which pages are most important",
								},
								{
									icon: "🌐",
									title: "Large Sites",
									desc: "Essential for sites with many pages",
								},
								{
									icon: "🔗",
									title: "Deep Links",
									desc: "Index pages deep in your site structure",
								},
								{
									icon: "📊",
									title: "SEO Boost",
									desc: "Improve overall search visibility",
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
									q: "What is an XML sitemap?",
									a: "An XML sitemap is a file that lists all the important URLs on your website. It helps search engines like Google understand your site structure and find all your pages.",
								},
								{
									q: "Where do I put the sitemap?",
									a: "Upload sitemap.xml to your website's root directory (e.g., https://example.com/sitemap.xml) and reference it in your robots.txt file.",
								},
								{
									q: "How do I submit a sitemap to Google?",
									a: "You can submit your sitemap through Google Search Console. Go to 'Sitemaps' section and add your sitemap URL.",
								},
								{
									q: "How often should I update my sitemap?",
									a: "Update your sitemap whenever you add or remove pages. Many CMS platforms update sitemaps automatically.",
								},
								{
									q: "Is this tool free?",
									a: "Yes, our sitemap generator is 100% free with no limits.",
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
									href: "/robots-txt-generator",
									icon: "🤖",
									title: "Robots.txt Generator",
									desc: "Control crawlers",
								},
								{
									href: "/xml-sitemap-extractor",
									icon: "📋",
									title: "Sitemap Extractor",
									desc: "Extract URLs from sitemaps",
								},
								{
									href: "/meta-tags-generator",
									icon: "🏷️",
									title: "Meta Tags Generator",
									desc: "Create SEO meta tags",
								},
								{
									href: "/schema-generator",
									icon: "📊",
									title: "Schema Generator",
									desc: "Create structured data",
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
				</div>
			</div>

			<script
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						5,
					),
				}}
			/>
		</>
	);
}
