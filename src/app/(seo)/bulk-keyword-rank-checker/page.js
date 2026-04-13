import BreadcrumbsEnhanced from "@/components/seo/BreadcrumbsEnhanced";
import FAQSection from "@/components/seo/FAQSection";

export const metadata = {
	title: "Free Bulk Keyword Rank Checker Online - No Signup | 30tools",
	description:
		"Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required, unlimited checks, and export reports. Try now!",
	keywords: [
		"bulk keyword rank checker",
		"keyword rank checker",
		"google rank checker",
		"check keyword position",
		"serp checker",
		"keyword position tracker",
		"bulk rank tracking",
		"free rank checker",
		"keyword ranking tool",
		"google keyword checker",
		"serp rank checker",
		"bulk keyword position checker",
		"rank tracker online",
		"keyword rank monitor",
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

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebApplication",
			name: "Bulk Keyword Rank Checker",
			alternateName: [
				"Keyword Position Checker",
				"Google Rank Tracker",
				"SEO Rank Monitor",
			],
			description:
				"Check Google rankings for multiple keywords instantly. Track keyword positions, monitor rank changes, and measure SEO performance across your target terms.",
			url: "https://30tools.com/bulk-keyword-rank-checker",
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
			name: "How to Check Keyword Rankings in Bulk",
			step: [
				{
					"@type": "HowToStep",
					position: 1,
					name: "Enter Website URL",
					text: "Input your website URL that you want to check rankings for.",
				},
				{
					"@type": "HowToStep",
					position: 2,
					name: "Add Keywords",
					text: "Enter multiple keywords (one per line) that you want to track rankings for.",
				},
				{
					"@type": "HowToStep",
					position: 3,
					name: "Check Positions",
					text: "Click 'Check Rankings' and wait for results showing position for each keyword.",
				},
			],
		},
		{
			"@type": "FAQPage",
			mainEntity: [
				{
					"@type": "Question",
					name: "How accurate is the rank checking?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Our rank checker provides accurate positions from Google search results using real-time queries. Results may vary slightly due to location, device, and personalization factors, but we use neutral search parameters for consistency.",
					},
				},
				{
					"@type": "Question",
					name: "Can I check unlimited keywords?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes, our bulk keyword rank checker allows you to check unlimited keywords for free. There are no daily limits or restrictions on how many keywords you can analyze.",
					},
				},
				{
					"@type": "Question",
					name: "Does it check rankings for different locations?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Yes, you can specify location (country/city) to get local search rankings. This helps understand how your site ranks in different geographic areas.",
					},
				},
				{
					"@type": "Question",
					name: "Can I export the rank data?",
					acceptedAnswer: {
						"@type": "Answer",
						text: "Ranking results can be easily copied or exported for reporting. You can track keyword position changes over time by saving and comparing results.",
					},
				},
			],
		},
		{
			"@type": "DefinedTerm",
			name: "Keyword Rank",
			definition:
				"Keyword rank (or keyword position) refers to the position a website appears in search engine results pages (SERPs) for a specific search query. Rank 1 means the website is the first organic result. Tracking keyword ranks is essential for measuring SEO performance and visibility.",
			inDefinedTermSet: {
				"@type": "DefinedTermSet",
				name: "SEO & Ranking Terms",
				description:
					"Definitions for search engine optimization and keyword ranking terminology.",
			},
		},
	],
};

export default async function BulkKeywordRankCheckerPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const toolData = {
		id: "bulk-keyword-rank-checker",
		name: "Bulk Keyword Rank Checker",
		description:
			"Check Google rankings for multiple keywords instantly with our free bulk keyword rank checker. Track keyword positions, monitor competitors, and get accurate SERP data. No signup required.",
		category: "seo",
		route: "/bulk-keyword-rank-checker",
		features: [
			"Bulk Check Up to 100 Keywords at Once",
			"Accurate Google SERP Positions",
			"Global & Local Ranking Support",
			"Competitor Position Comparison",
			"Historical Rank Tracking",
			"Search Volume & CPC Data",
			"Export to CSV/Excel",
			"Domain vs Subdomain Analysis",
			"Mobile & Desktop Rankings",
			"Real-time Updates",
			"100% Free - No Limits",
			"No Account Required",
		],
		benefits: [
			"Save hours by checking hundreds of keywords in seconds",
			"Identify ranking opportunities and drops quickly",
			"Monitor SEO campaign performance daily",
			"Benchmark against competitors' positions",
			"Track long-tail keyword performance",
			"Optimize content based on actual rankings",
		],
		useCases: [
			"SEO agencies tracking client keyword portfolios",
			"In-house marketers monitoring website rankings",
			"Bloggers tracking content performance",
			"E-commerce sites monitoring product keywords",
			"Freelancers providing SEO reports",
			"Researchers studying SERP trends",
			"Students learning SEO analytics",
			"Small businesses tracking local rankings",
		],
		faqs: [
			{
				question: "What is a bulk keyword rank checker?",
				answer:
					"A bulk keyword rank checker is an SEO tool that queries Google for multiple keywords at once and returns the position (ranking) of a specified website for each keyword. It automates the tedious process of manually searching for each keyword to find your site's rank.",
			},
			{
				question: "Is this Bulk Keyword Rank Checker really free?",
				answer:
					"Yes! 30Tools offers a completely free bulk rank checker with no usage limits, no trials, and no paywalls. Check unlimited keywords for unlimited domains without ever creating an account. 100% free forever.",
			},
			{
				question: "How do I check keyword rankings in bulk?",
				answer:
					"1. Enter your domain (e.g., yourwebsite.com). 2. Paste your list of keywords (one per line, up to 100). 3. Select target country/device if needed. 4. Click 'Check Rankings'. 5. View results showing each keyword's position, search volume, and change over time.",
			},
			{
				question: "How accurate are the rank positions?",
				answer:
					"We use real-time queries to Google from clean IP addresses to ensure accuracy. Rankings can vary by location, device, search history, and SERP features. We provide an average position based on standardized queries for consistent tracking.",
			},
			{
				question: "What data is included in the rank report?",
				answer:
					"Reports include: keyword, your domain's position, search volume, CPC, competition level, top 10 competitors for that keyword, historical position graph, and whether a SERP feature (featured snippet, local pack) appears.",
			},
			{
				question: "Can I track rankings over time?",
				answer:
					"Yes! Our tool stores historical data for your checks. You can view position trends, identify improvements or drops, and monitor the impact of your SEO efforts over days, weeks, or months. Export history for your records.",
			},
			{
				question: "Can I check competitor rankings?",
				answer:
					"Absolutely. Enter any competitor's domain alongside yours to compare keyword positions side-by-side. See who ranks higher for which keywords and identify gaps or opportunities to outrank them.",
			},
			{
				question: "What is the maximum number of keywords I can check at once?",
				answer:
					"Our free tool supports up to 100 keywords per bulk check. You can perform unlimited batches—run multiple groups of 100 to cover your entire keyword portfolio without restriction.",
			},
			{
				question: "Do I need to be logged in or create an account?",
				answer:
					"No. Our rank checker works instantly without any account creation, login, or personal information. Your checks are private and we don't store your keyword lists or domain data longer than necessary.",
			},
			{
				question: "Why are some keywords showing 'Not in Top 100'?",
				answer:
					"If your domain doesn't appear in the first 100 organic results for that keyword, we report 'Not in Top 100'. This means you're ranking very low (beyond page 10) or not indexed for that query. Focus on improving those keywords.",
			},
			{
				question: "Can I check local rankings for specific cities?",
				answer:
					"Yes! Our tool supports local rank checking. Select a specific country, state/province, or city to see rankings as they appear to users in that location. Great for local SEO and multi-location businesses.",
			},
			{
				question: "What search engines are supported?",
				answer:
					"Currently we support Google (most regions). Additional search engines like Bing and DuckDuckGo may be added in the future based on demand. Google holds ~90% market share and our primary focus.",
			},
			{
				question: "Is there a limit on how many times I can use this per day?",
				answer:
					"No daily limits. Use as often as needed—hourly, daily, or weekly. We encourage regular monitoring as rankings can fluctuate. Check your entire keyword portfolio as frequently as you like.",
			},
			{
				question: "How often is ranking data updated?",
				answer:
					"Rankings are fetched in real-time on each check, so you're seeing the current Google SERP snapshot. Historical data points are stored for trend analysis. Regular checks (daily/weekly) help you stay on top of changes.",
			},
			{
				question: "Can I export my ranking reports?",
				answer:
					"Yes! Export your bulk rank results to CSV or Excel format. Includes keyword, position, search volume, and competitor data. Perfect for sharing with team members, clients, or importing into other SEO platforms.",
			},
		],
		howTo: {
			name: "How to Use the Bulk Keyword Rank Checker",
			steps: [
				{
					name: "Enter Your Domain",
					text: "Input the website domain you want to track (e.g., yoursite.com). Use the root domain for domain-wide tracking, or a specific subpage URL for page-level rankings.",
					url: "https://30tools.com/bulk-keyword-rank-checker#step1",
					image: "https://30tools.com/images/rank-checker-step1.jpg",
				},
				{
					name: "Paste Your Keywords",
					text: "Prepare your keyword list (one keyword per line). Paste up to 100 keywords into the text area. You can copy from spreadsheets, documents, or SEO tools like Google Search Console.",
					url: "https://30tools.com/bulk-keyword-rank-checker#step2",
					image: "https://30tools.com/images/rank-checker-step2.jpg",
				},
				{
					name: "Run Check & Analyze",
					text: "Select target location and device (optional). Click 'Check Rankings Now'. Within seconds, you'll see each keyword's current position, search volume, and changes. Export your report for records or share with your team.",
					url: "https://30tools.com/bulk-keyword-rank-checker#step3",
					image: "https://30tools.com/images/rank-checker-step3.jpg",
				},
			],
		},
	};

	// Breadcrumbs
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "SEO Tools", url: "/seo" },
		{ name: "Bulk Keyword Rank Checker", url: "/bulk-keyword-rank-checker" },
	];

	// Benefits array (6 items)
	const benefits = [
		{
			icon: "📊",
			title: "Bulk Analysis",
			description:
				"Check rankings for hundreds of keywords at once. Save time with bulk upload via CSV or manual entry.",
		},
		{
			icon: "⚡",
			title: "Real-Time Results",
			description:
				"Get instant position data from Google search. No waiting, no delays. Results in seconds.",
		},
		{
			icon: "📈",
			title: "Track Changes",
			description:
				"Monitor rank movements over time. Identify improvements, drops, and opportunities at a glance.",
		},
		{
			icon: "🎯",
			title: "Multiple Locations",
			description:
				"Check rankings for different countries, cities, and languages. Essential for local SEO.",
		},
		{
			icon: "📱",
			title: "Device Testing",
			description:
				"Check rankings for both desktop and mobile results. Understand device-specific positioning.",
		},
		{
			icon: "📤",
			title: "Export Reports",
			description:
				"Download ranking data as CSV or PDF. Create professional reports for clients or stakeholders.",
		},
	];

	// Use Cases array
	const useCases = [
		{
			category: "SEO Performance Tracking",
			description:
				"Monitor keyword positions to measure SEO campaign effectiveness.",
			examples: [
				"Track target keyword rankings weekly",
				"Measure impact of content updates",
				"Monitor competitor positions",
				"Identify ranking opportunities",
			],
		},
		{
			category: "Content Optimization",
			description:
				"Understand which content needs improvement based on ranking performance.",
			examples: [
				"Find keywords ranking in positions 11-20 (page 2)",
				"Identify high-impression but low-rank keywords",
				"Track content improvement results",
				"Optimize Meta tags and titles",
			],
		},
		{
			category: "Competitor Analysis",
			description:
				"Benchmark against competitors and identify gaps in rankings.",
			examples: [
				"Compare your positions vs competitors",
				"Find keywords competitors rank for",
				"Identify untapped keyword opportunities",
				"Track competitor rank movements",
			],
		},
		{
			category: "Client Reporting",
			description:
				"Generate professional reports showing SEO progress for clients.",
			examples: [
				"Create monthly rank tracking reports",
				"Export data for presentations",
				"Show value of SEO services",
				"Track KPI improvements over time",
			],
		},
	];

	// Comparisons
	const comparisons = [
		{
			tool: "Ahrefs Rank Tracker",
			pros: ["Comprehensive data", "Historical tracking", "Mobile/Desktop"],
			cons: [
				"Expensive ($99+/month)",
				"Limited keyword quotas",
				"Overkill for simple checks",
			],
			ourAdvantage:
				"Completely free with no keyword limits. Simple, focused, no monthly costs.",
		},
		{
			tool: "SEMrush Position Tracking",
			pros: ["Daily updates", "Competitor tracking", "Detailed graphs"],
			cons: [
				"High cost ($119+/month)",
				"Project limits apply",
				"Complex interface",
			],
			ourAdvantage:
				"Instant checks without projects or daily quotas. Use as much as you want, whenever you want.",
		},
		{
			tool: "Google Search Console",
			pros: ["Free", "Official data", "Impression metrics"],
			cons: [
				"Only your own site",
				"Aggregated data only",
				"No competitor tracking",
			],
			ourAdvantage:
				"Check any website, not just your own. Get precise positions, not ranges. Compare with competitors.",
		},
		{
			tool: "SERPstat Rank Tracker",
			pros: ["Good features", "Multi-engine", "Reasonably priced"],
			cons: [
				"Paid ($20+/month)",
				"Limited keywords",
				"Mobile add-ons cost extra",
			],
			ourAdvantage:
				"No subscription, no tiers. All features free. Check unlimited keywords, unlimited sites.",
		},
	];

	// Related tools (6 SEO tools)
	const relatedTools = [
		{
			id: "keyword-research-tool",
			name: "Keyword Research Tool",
			description: "Find high-value SEO keywords and analyze search volume",
			route: "/keyword-research-tool",
			category: "seo",
		},
		{
			id: "seo-audit-tool",
			name: "SEO Audit Tool",
			description: "Comprehensive technical SEO analysis",
			route: "/seo-audit-tool",
			category: "seo",
		},
		{
			id: "website-analyzer",
			name: "Website Analyzer",
			description: "Full site health and performance check",
			route: "/website-analyzer",
			category: "seo",
		},
		{
			id: "meta-tags-generator",
			name: "Meta Tags Generator",
			description: "Create optimized title tags and meta descriptions",
			route: "/meta-tags-generator",
			category: "seo",
		},
		{
			id: "backlink-checker",
			name: "Backlink Checker",
			description: "Analyze website backlink profiles",
			route: "/backlink-checker",
			category: "seo",
		},
		{
			id: "sitemap-generator",
			name: "Sitemap Generator",
			description: "Generate XML sitemaps for search engines",
			route: "/sitemap-generator",
			category: "seo",
		},
	];

	// Featured definition
	const featuredDefinition = {
		term: "Keyword Rank / Position",
		definition:
			"Keyword rank (or keyword position) is the placement of a website in search engine results pages (SERPs) for a specific search query. Rank 1 means the site appears first among organic results. Higher ranks lead to more organic traffic — research shows the first result gets ~28% of clicks, dropping to ~2.5% by position 10. Tracking keyword ranks helps measure SEO effectiveness and identify optimization opportunities.",
		source: "Search Engine Journal & Moz",
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
							Free <span className="text-primary">Rank Checker</span>
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Check Google rankings for multiple keywords instantly. Track
							positions, monitor rank changes, and measure SEO performance
							across your target terms. No signup required.
						</p>
						<div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								✅ Free Forever
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								⚡ Instant Results
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								🔢 Bulk Check
							</span>
							<span className="flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full">
								📊 Position Tracking
							</span>
						</div>
						<div className="flex justify-center gap-3 pt-2">
							<QuickActions
								toolName="Bulk Keyword Rank Checker"
								toolUrl="https://30tools.com/bulk-keyword-rank-checker"
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
										<span className="text-2xl">📊</span>
									</div>
								</div>
								<div className="flex-1">
									<h2 className="text-xl font-bold mb-2">
										What is Keyword Rank?
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
							<BulkKeywordRankChecker />
						</div>
					</section>

					{/* How It Works - 3 Step Section */}
					<section className="mb-20">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold mb-3">
								How It Works
							</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Check keyword rankings in 3 easy steps
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							{[
								{
									step: "1",
									title: "Enter Website & Keywords",
									description:
										"Input your website URL and list of keywords (one per line) you want to track.",
									icon: "📝",
								},
								{
									step: "2",
									title: "Select Location & Device",
									description:
										"Choose country/location and device type (desktop/mobile) for accurate results.",
									icon: "🌍",
								},
								{
									step: "3",
									title: "Get Rankings",
									description:
										"Click 'Check Rankings' and view detailed results showing positions for each keyword.",
									icon: "📈",
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
								Why Track Keyword Rankings?
							</h2>
							<p className="text-muted-foreground">
								Essential benefits for SEO success
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
									Know Your Position, Own Your Rankings
								</h2>
								<div className="grid md:grid-cols-2 gap-8 items-center">
									<div>
										<p className="text-muted-foreground mb-4 leading-relaxed">
											What good is SEO if you can't measure it? Our rank checker
											gives you the data you need to understand your search
											visibility, track progress, and make informed decisions.
											Monitor thousands of keywords across multiple locations
											and devices without limits or restrictions.
										</p>
										<ul className="space-y-3">
											{[
												"Unlimited keyword checks, forever free",
												"Track any website, not just yours",
												"Monitor competitors alongside your own",
												"Export data for reporting and analysis",
												"Check multiple locations and devices",
												"Track ranking changes over time",
											].map((item, i) => (
												<li key={i} className="flex items-start gap-2">
													<span className="text-primary mt-1">✓</span>
													<span className="text-sm">{item}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="bg-card rounded-xl border border-border p-6 text-center">
										<div className="text-4xl font-bold text-primary mb-2">
											∞
										</div>
										<p className="text-sm text-muted-foreground mb-4">
											Unlimited Keywords
										</p>
										<div className="text-3xl font-bold mb-2">$0</div>
										<p className="text-sm text-muted-foreground mb-4">
											Monthly Cost
										</p>
										<div className="text-lg font-semibold text-green-600 dark:text-green-400">
											Completely Free
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
								How SEO teams use rank tracking daily
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
								How We Compare
							</h2>
							<p className="text-muted-foreground">
								Free vs paid rank tracking solutions
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
							categoryTitle="Keyword Ranking"
							variant="accordion"
							showSchema={true}
						/>
					</section>

					{/* Related Tools */}
					<section className="mb-20">
						<RelatedTools
							currentTool="bulk-keyword-rank-checker"
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
