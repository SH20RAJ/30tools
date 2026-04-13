import BreadcrumbsEnhanced from "@/components/seo/BreadcrumbsEnhanced";
import FAQSection from "@/components/seo/FAQSection";

export const metadata = {
	title: "Free Backlink Checker Online - No Signup | 30tools",
	description:
		"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, link quality, and competitor strategies instantly. No signup, unlimited checks, and privacy-focused. Try now!",
	keywords: [
		"backlink checker",
		"free backlink checker",
		"check backlinks",
		"backlink analyzer",
		"website backlink checker",
		"seo backlink checker",
		"backlink analysis tool",
		"check website backlinks",
		"free backlink audit",
		"backlink profile checker",
		"backlink check",
		"anchor text checker",
		"referring domains checker",
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

// Enhanced JSON-LD Schema
const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebApplication",
			name: "Backlink Checker",
			description:
				"Analyze any website's backlink profile. Check referring domains, dofollow/nofollow links, anchor text distribution, and domain authority.",
			url: "https://30tools.com/backlink-checker",
			applicationCategory: "SEOApplication",
			operatingSystem: "Web Browser",
			isAccessibleForFree: true,
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "USD",
			},
			provider: {
				"@type": "Organization",
				name: "30tools",
				url: "https://30tools.com",
			},
		},
		{
			"@type": "HowTo",
			name: "How to Check Backlinks Using 30Tools",
			step: [
				{
					"@type": "HowToStep",
					position: 1,
					name: "Enter Website URL",
					text: "Type or paste the website URL you want to analyze into the search box.",
				},
				{
					"@type": "HowToStep",
					position: 2,
					name: "Analyze Backlinks",
					text: "Click 'Check Backlinks' and wait for our system to analyze the website's link profile.",
				},
				{
					"@type": "HowToStep",
					position: 3,
					name: "Review Results",
					text: "View detailed reports including total backlinks, referring domains, anchor text, and domain authority metrics.",
				},
			],
		},
		{
			"@type": "FAQPage",
			mainEntity: [
				{
					"@type": "Question",
					name: "Why are backlinks important for SEO?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Backlinks are one of Google's top ranking factors. They act as 'votes of confidence' from other websites, signaling authority, trust, and content quality to search engines.",
					},
				},
				{
					"@type": "Question",
					name: "How often is the backlink data updated?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Our backlink database is updated regularly to provide the most current snapshot of your link profile and industry trends.",
					},
				},
				{
					"@type": "Question",
					name: "Can I analyze my competitors' backlinks?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes, you can analyze any publicly accessible website, allowing you to spy on competitors' link building strategies and identify new opportunities.",
					},
				},
			],
		},
		{
			"@type": "DefinedTerm",
			name: "Backlink",
			description:
				"A backlink (also called inbound or incoming link) is a hyperlink from one website to another. Search engines use backlinks as a ranking signal because they indicate that the linked content is valuable and trustworthy.",
			inDefinedTermSet: {
				"@type": "DefinedTermSet",
				name: "SEO Terms",
				description:
					"Common SEO terminology and definitions to help understand search engine optimization concepts.",
			},
		},
	],
};

export default async function BacklinkCheckerPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const toolData = {
		id: "backlink-checker",
		name: "Backlink Checker",
		description:
			"Analyze backlinks for any website with our free backlink checker. Discover referring domains, anchor texts, and link quality metrics instantly. No signup required, unlimited checks, SEO-grade data.",
		category: "seo",
		route: "/backlink-checker",
		features: [
			"Comprehensive Backlink Profile Analysis",
			"Referring Domain Identification",
			"Anchor Text Distribution",
			"Link Quality & Authority Metrics",
			"New & Lost Backlinks Tracking",
			"Competitor Backlink Comparison",
			"Export Reports (CSV, PDF)",
			"Real-time Data Updates",
			"100% Free - Unlimited Checks",
			"No Registration Required",
			"Privacy-Focused Processing",
			"Fast Results in Seconds",
		],
		benefits: [
			"Improve SEO by understanding your backlink profile",
			"Identify toxic or spammy links harming your rankings",
			"Discover competitor link-building strategies",
			"Track link-building campaign effectiveness",
			"Find opportunities for new backlinks",
			"Monitor domain authority changes over time",
		],
		useCases: [
			"SEO professionals auditing client websites",
			"Digital marketers tracking competitor backlinks",
			"Website owners monitoring their link profile",
			"Link builders identifying opportunities",
			"Agencies presenting reports to clients",
			"Researchers studying SEO strategies",
			"Bloggers checking guest post backlinks",
			"E-commerce sites analyzing product backlinks",
		],
		faqs: [
			{
				question: "What is a backlink checker?",
				answer:
					"A backlink checker is an SEO tool that analyzes the external links pointing to a website. It reveals which sites link to you, the anchor text used, the authority of linking domains, and helps assess your site's overall backlink profile quality.",
			},
			{
				question: "Is this Backlink Checker really free?",
				answer:
					"Yes! 30Tools offers a completely free backlink checker with no usage limits, no trials, and no paywalls. Check unlimited websites without creating an account. 100% free forever.",
			},
			{
				question: "How do I check backlinks for a website?",
				answer:
					"Simply enter the website URL you want to analyze. Our tool will scan multiple data sources and compile a comprehensive backlink report showing all known referring domains, individual backlinks, anchor texts, and quality metrics.",
			},
			{
				question: "What data does the backlink report include?",
				answer:
					"Our report includes: total backlinks count, referring domains, anchor text diversity, dofollow/nofollow breakdown, domain authority scores, IP diversity, country distribution, and historical trends. Export options available.",
			},
			{
				question: "Why are backlinks important for SEO?",
				answer:
					"Backlinks are a core Google ranking factor. Quality links from authoritative sites signal trust and relevance, boosting your rankings. Low-quality or spammy links can harm SEO, so regular backlink audits are essential.",
			},
			{
				question: "Can I check my competitors' backlinks?",
				answer:
					"Yes! Enter any competitor's domain to analyze their backlink profile. Discover their linking domains, anchor strategies, and potential link-building opportunities you can replicate or improve upon.",
			},
			{
				question: "How accurate is this backlink data?",
				answer:
					"We aggregate data from multiple trusted SEO data providers to ensure comprehensive coverage. While no tool is 100% perfect due to crawl frequency variations, our data is updated regularly and matches industry standards.",
			},
			{
				question:
					"What's the difference between backlinks and referring domains?",
				answer:
					"Backlinks are individual links from other sites. Referring domains are unique root domains linking to you. One domain can provide multiple backlinks (e.g., multiple pages linking to you). Domain diversity is generally more valuable than sheer backlink count.",
			},
			{
				question: "Can I export my backlink report?",
				answer:
					"Yes! Export your full backlink analysis in CSV, Excel, or PDF formats. Perfect for sharing with team members, clients, or importing into other SEO tools for further analysis.",
			},
			{
				question: "Is my data secure when using Backlink Checker?",
				answer:
					"Absolutely. Our tool runs entirely in your browser. We do not store the URLs you analyze, your reports, or any identifying information. Your SEO research remains completely private and secure.",
			},
			{
				question: "How often is backlink data updated?",
				answer:
					"Our data is updated regularly from multiple crawl sources. For the most current backlink information, check frequently and cross-reference with Google Search Console data if available for your property.",
			},
			{
				question: "What makes a 'good' backlink?",
				answer:
					"Good backlinks come from authoritative, relevant websites with high domain authority. They use natural anchor text, are placed in content (not footers/sidebars), and come from sites with real human traffic. Quality over quantity always.",
			},
			{
				question: "Can I find toxic backlinks with this tool?",
				answer:
					"Yes. Our analysis flags potentially harmful links from spammy domains, link farms, or irrelevant sites with low authority. We help you identify links that may be hurting your SEO so you can disavow them via Google Search Console.",
			},
		],
		howTo: {
			name: "How to Use the Backlink Checker",
			steps: [
				{
					name: "Enter Website URL",
					text: "Type or paste the domain you want to analyze (e.g., example.com). Ensure it's a valid, publicly accessible website. Our tool supports any domain, not just yours.",
					url: "https://30tools.com/backlink-checker#step1",
					image: "https://30tools.com/images/backlink-step1.jpg",
				},
				{
					name: "Start Analysis",
					text: "Click the 'Check Backlinks' button. Our system queries multiple data sources and begins compiling your comprehensive backlink profile report.",
					url: "https://30tools.com/backlink-checker#step2",
					image: "https://30tools.com/images/backlink-step2.jpg",
				},
				{
					name: "Review & Export Results",
					text: "Once complete, review your backlink data: total links, referring domains, anchor distribution, and quality metrics. Use the export buttons to download your report in CSV or PDF for future reference.",
					url: "https://30tools.com/backlink-checker#step3",
					image: "https://30tools.com/images/backlink-step3.jpg",
				},
			],
		},
	};

	// Breadcrumbs configuration
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "SEO Tools", url: "/seo" },
		{ name: "Backlink Checker", url: "/backlink-checker" },
	];

	// Benefits array (6 items)
	const benefits = [
		{
			icon: "🔍",
			title: "Comprehensive Analysis",
			description:
				"Get complete backlink profiles including total links, referring domains, and link quality metrics.",
		},
		{
			icon: "⚔️",
			title: "Competitor Intelligence",
			description:
				"Spy on competitors' backlink strategies to discover new link building opportunities.",
		},
		{
			icon: "🎯",
			title: "Anchor Text Distribution",
			description:
				"Understand how your brand is being linked and optimize anchor text diversity.",
		},
		{
			icon: "📊",
			title: "Quality Metrics",
			description:
				"Assess link quality with domain authority, spam score, and trust indicators.",
		},
		{
			icon: "🚫",
			title: "Toxic Link Detection",
			description:
				"Identify harmful backlinks that could negatively impact your search rankings.",
		},
		{
			icon: "📥",
			title: "Export Reports",
			description:
				"Download detailed backlink reports in multiple formats for offline analysis.",
		},
	];

	// Use Cases array (4 categories with examples)
	const useCases = [
		{
			category: "Competitor Research",
			description:
				"Analyze competitors' link building strategies and find opportunities to outrank them.",
			examples: [
				"Identify competitor's top referring domains",
				"Find guest posting opportunities",
				"Discover untapped link sources",
				"Analyze their anchor text strategy",
			],
		},
		{
			category: "Site Audits",
			description:
				"Conduct thorough backlink audits to maintain and improve your website's health.",
			examples: [
				"Find lost or broken backlinks",
				"Detect toxic or spammy links",
				"Audit internal linking structure",
				"Identify nofollow vs dofollow ratios",
			],
		},
		{
			category: "Link Building",
			description:
				"Build high-quality backlinks that improve search rankings and domain authority.",
			examples: [
				"Find authoritative sites in your niche",
				"Identify unlinked brand mentions",
				"Analyze competitor link sources",
				"Track new backlinks over time",
			],
		},
		{
			category: "SEO Monitoring",
			description:
				"Monitor your backlink profile health and track changes over time.",
			examples: [
				"Track new backlinks as they appear",
				"Monitor domain authority trends",
				"Set up alerts for lost links",
				"Validate link building efforts",
			],
		},
	];

	// Comparisons array (4 alternatives with pros/cons/ourAdvantage)
	const comparisons = [
		{
			tool: "Ahrefs",
			pros: ["Extensive database", "Advanced filtering", "Detailed metrics"],
			cons: [
				"Expensive ($99+/month)",
				"Overwhelming for beginners",
				"Free trial limited",
			],
			ourAdvantage:
				"30tools is completely free forever with no usage limits or subscription required.",
		},
		{
			tool: "SEMrush",
			pros: [
				"All-in-one SEO suite",
				"Competitive analysis",
				"Keyword research",
			],
			cons: [
				"High cost ($119+/month)",
				"Complex interface",
				"Steep learning curve",
			],
			ourAdvantage:
				"Simple, focused backlink analysis with instant results and zero learning curve.",
		},
		{
			tool: "Majestic",
			pros: ["Huge link index", "Trust flow metrics", "Historical data"],
			cons: ["Expensive ($49+/month)", "UI is dated", "Limited keyword data"],
			ourAdvantage:
				"Modern interface, fast performance, and completely free access to quality backlink metrics.",
		},
		{
			tool: "Moz Link Explorer",
			pros: [
				"Domain Authority metric",
				"Good for beginners",
				"Educational content",
			],
			cons: [
				"Limited index size",
				"Paid plans required",
				"Update frequency lower",
			],
			ourAdvantage:
				"Daily updated data with unlimited checks and no account registration needed.",
		},
	];

	// Related tools array (6 relevant tools)
	const relatedTools = [
		{
			id: "keyword-research-tool",
			name: "Keyword Research Tool",
			description: "Find high-value SEO keywords",
			route: "/keyword-research-tool",
			category: "seo",
		},
		{
			id: "seo-audit-tool",
			name: "SEO Audit Tool",
			description: "Comprehensive site analysis",
			route: "/seo-audit-tool",
			category: "seo",
		},
		{
			id: "bulk-keyword-rank-checker",
			name: "Bulk Rank Checker",
			description: "Track keyword positions",
			route: "/bulk-keyword-rank-checker",
			category: "seo",
		},
		{
			id: "website-analyzer",
			name: "Website Analyzer",
			description: "Full technical SEO audit",
			route: "/website-analyzer",
			category: "seo",
		},
		{
			id: "meta-tags-generator",
			name: "Meta Tags Generator",
			description: "Optimize on-page SEO",
			route: "/meta-tags-generator",
			category: "seo",
		},
		{
			id: "sitemap-generator",
			name: "Sitemap Generator",
			description: "Create XML sitemaps",
			route: "/sitemap-generator",
			category: "seo",
		},
	];

	// Featured definition snippet
	const featuredDefinition = {
		term: "Backlink",
		definition:
			"A backlink (inbound link) is a hyperlink from one website to another. In SEO, backlinks serve as 'votes of confidence' that signal content quality and authority to search engines. High-quality backlinks from reputable sites can significantly improve search rankings and domain authority.",
		source: "Google Search Essentials",
	};

	return (
		<>
			{/* Enhanced JSON-LD Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
					{/* Breadcrumbs */}
					<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />

					{/* Hero Section */}
					<section className="text-center space-y-6 mb-16">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
							Free <span className="text-primary">Backlink Checker</span>
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Analyze any website's backlink profile instantly. Check referring
							domains, dofollow/nofollow links, anchor text distribution, and
							domain authority metrics. No signup required.
						</p>
						<div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								✅ Free Forever
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								⚡ Instant Results
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								🔒 No Signup
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								🛡️ Private & Secure
							</span>
						</div>
						<div className="flex justify-center gap-3 pt-2">
							<QuickActions
								toolName="Backlink Checker"
								toolUrl="https://30tools.com/backlink-checker"
								showBookmark={true}
								showShare={true}
							/>
						</div>
					</section>

					{/* Featured Definition Block */}
					<section className="mb-16">
						<div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 md:p-8">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
										<span className="text-2xl">📚</span>
									</div>
								</div>
								<div className="flex-1">
									<h2 className="text-xl font-bold mb-2">
										What is a Backlink?
									</h2>
									<p className="text-muted-foreground leading-relaxed text-sm md:text-base">
										{featuredDefinition.definition}
									</p>
									<p className="text-xs text-muted-foreground/70 mt-2">
										Source: {featuredDefinition.source}
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Tool Interface */}
					<section className="mb-20">
						<div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
							<SeoAnalyzer type="backlink" title="Check Backlinks" />
						</div>
					</section>

					{/* How It Works - 3 Step Section */}
					<section className="mb-20">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								How It Works
							</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Analyze backlinks in 3 simple steps
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							{[
								{
									step: "1",
									title: "Enter URL",
									description:
										"Type or paste any website URL into the search box above.",
									icon: "🔗",
								},
								{
									step: "2",
									title: "Analyze",
									description:
										"Our system scans millions of sources to compile complete backlink data.",
									icon: "⚡",
								},
								{
									step: "3",
									title: "Get Results",
									description:
										"View detailed reports with metrics, export data, and start optimizing.",
									icon: "📊",
								},
							].map((item, idx) => (
								<div
									key={idx}
									className="text-center space-y-4 p-6 bg-card rounded-xl border border-border"
								>
									<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
										<span className="text-3xl">{item.icon}</span>
									</div>
									<div>
										<span className="text-sm font-bold text-primary">
											Step {item.step}
										</span>
										<h3 className="text-xl font-semibold mt-1">{item.title}</h3>
										<p className="text-muted-foreground text-sm mt-2">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Benefits Grid */}
					<section className="mb-20">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								Why Choose Our Backlink Checker?
							</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Powerful features to dominate your SEO strategy
							</p>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{benefits.map((benefit, idx) => (
								<div
									key={idx}
									className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
								>
									<div className="flex items-start gap-4">
										<span className="text-3xl flex-shrink-0">
											{benefit.icon}
										</span>
										<div>
											<h3 className="text-lg font-semibold mb-2">
												{benefit.title}
											</h3>
											<p className="text-sm text-muted-foreground">
												{benefit.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Value Proposition Section */}
					<section className="mb-20">
						<div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
							<div className="max-w-4xl mx-auto">
								<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
									Unlock Your SEO Potential
								</h2>
								<div className="grid md:grid-cols-2 gap-8 items-center">
									<div>
										<p className="text-muted-foreground mb-4 leading-relaxed">
											Backlinks are the currency of the web. With 30tools
											Backlink Checker, you get the intelligence you need to
											build a powerful link profile, outrank competitors, and
											drive organic traffic.
										</p>
										<ul className="space-y-3">
											{[
												"Identify high-value link opportunities",
												"Monitor competitor strategies",
												"Detect toxic links before they hurt rankings",
												"Track link building campaign progress",
											].map((item, i) => (
												<li key={i} className="flex items-start gap-2">
													<span className="text-primary mt-1">✓</span>
													<span className="text-sm">{item}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="bg-card rounded-xl border border-border p-6">
										<div className="text-center mb-4">
											<div className="text-4xl font-bold text-primary mb-2">
												Unlimited
											</div>
											<p className="text-sm text-muted-foreground">
												Checks per day
											</p>
										</div>
										<div className="text-center">
											<div className="text-3xl font-bold mb-2">0$</div>
											<p className="text-sm text-muted-foreground mb-4">
												Monthly cost
											</p>
											<div className="text-lg font-semibold text-green-600 dark:text-green-400">
												Completely Free
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Use Cases Section */}
					<section className="mb-20">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								Practical Use Cases
							</h2>
							<p className="text-muted-foreground">
								How SEO professionals and marketers use backlink analysis
							</p>
						</div>
						<div className="space-y-8">
							{useCases.map((useCase, idx) => (
								<div
									key={idx}
									className="bg-card rounded-xl border border-border p-6 md:p-8"
								>
									<div className="mb-4">
										<h3 className="text-2xl font-bold mb-2">
											{useCase.category}
										</h3>
										<p className="text-muted-foreground">
											{useCase.description}
										</p>
									</div>
									<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
										{useCase.examples.map((example, exIdx) => (
											<div
												key={exIdx}
												className="bg-muted/30 rounded-lg p-4 text-sm"
											>
												<div className="flex items-start gap-2">
													<span className="text-primary text-lg">→</span>
													<span>{example}</span>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Comparison Table */}
					<section className="mb-20">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								Why 30tools Stands Out
							</h2>
							<p className="text-muted-foreground">
								Compare with popular paid alternatives
							</p>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full bg-card rounded-xl border border-border">
								<thead>
									<tr className="border-b">
										<th className="text-left p-4 font-semibold">Tool</th>
										<th className="text-left p-4 font-semibold">Pros</th>
										<th className="text-left p-4 font-semibold">Cons</th>
										<th className="text-left p-4 font-semibold">
											Our Advantage
										</th>
									</tr>
								</thead>
								<tbody>
									{comparisons.map((comp, idx) => (
										<tr key={idx} className="border-b last:border-0">
											<td className="p-4 font-semibold">{comp.tool}</td>
											<td className="p-4">
												<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
													{comp.pros.map((pro, i) => (
														<li key={i}>{pro}</li>
													))}
												</ul>
											</td>
											<td className="p-4">
												<ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
													{comp.cons.map((con, i) => (
														<li key={i}>{con}</li>
													))}
												</ul>
											</td>
											<td className="p-4 text-sm text-green-600 dark:text-green-400 font-medium">
												{comp.ourAdvantage}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>

					{/* FAQ Accordion */}
					<section className="mb-20">
						<FAQSection
							faqs={toolData?.faqs || []}
							title="Frequently Asked Questions"
							categoryTitle="Backlink Analysis"
							variant="accordion"
							showSchema={true}
						/>
					</section>

					{/* Related Tools */}
					<section className="mb-20">
						<RelatedTools
							currentTool="backlink-checker"
							category="seo"
							tools={relatedTools}
							title="Explore More SEO Tools"
						/>
					</section>
				</div>
			</div>
		</>
	);
}
