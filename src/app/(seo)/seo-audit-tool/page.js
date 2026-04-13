export const metadata = {
	title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
	description:
		"SEO tools: Complete SEO Audit Tool. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your brow",
	keywords: [
		"complete seo audit tool",
		"complete seo audit tool free",
		"complete seo audit tool online",
		"complete seo audit tool tool",
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

const jsonLd = generateToolJsonLd("seo-audit-tool", "seo", {
	name: "SEO Audit Tool",
	description:
		"Run a full SEO audit to uncover technical, on-page, and performance issues that affect search visibility.",
});

export default async function SeoAuditToolPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const toolData = {
		id: "seo-audit-tool",
		name: "Complete SEO Audit Tool",
		description:
			"Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations.",
		category: "seo",
		route: "/seo-audit-tool",
		features: [
			"100% Free - No hidden costs or subscriptions",
			"No Registration Required - Start immediately",
			"Secure & Private - All processing in your browser",
			"Fast & Efficient - Get results in seconds",
			"No File Size Limits - Handle large files easily",
			"Mobile Friendly - Works on all devices",
		],
		benefits: [],
		useCases: [],
		faqs: [
			{
				question: "Is this Complete SEO Audit Tool really free?",
				answer:
					"Yes! Our Complete SEO Audit Tool is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.",
			},
			{
				question: "Is my data secure when using Complete SEO Audit Tool?",
				answer:
					"Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.",
			},
			{
				question:
					"Do I need to create an account to use Complete SEO Audit Tool?",
				answer:
					"No registration required. You can start using Complete SEO Audit Tool immediately without creating an account or providing any personal information.",
			},
			{
				question: "Are there any file size limits for Complete SEO Audit Tool?",
				answer:
					"There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.",
			},
			{
				question: "Can I use Complete SEO Audit Tool on mobile devices?",
				answer:
					"Yes, Complete SEO Audit Tool is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.",
			},
			{
				question: "What file formats does Complete SEO Audit Tool support?",
				answer:
					"Complete SEO Audit Tool supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.",
			},
		],
		howTo: {
			name: "How to Use Complete SEO Audit Tool",
			steps: [
				{
					name: "Upload or Input",
					text: "Provide your file or input data using the upload button or text input field. Complete SEO Audit Tool supports drag-and-drop for convenience.",
					url: "/seo-audit-tool#step1",
					position: 1,
				},
				{
					name: "Configure Settings",
					text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
					url: "/seo-audit-tool#step2",
					position: 2,
				},
				{
					name: "Process & Download",
					text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
					url: "/seo-audit-tool#step3",
					position: 3,
				},
			],
		},
	};

	const features = [
		"On-Page SEO Analysis",
		"Technical SEO Check",
		"Mobile Optimization Score",
		"Page Speed Insights",
		"Core Web Vitals Assessment",
		"Meta Tags Verification",
		"Internal Link Analysis",
		"Downloadable PDF Report",
	];

	const examples = [
		{
			title: "Technical Health",
			description: "Find crawling issues",
			input: "Your URL",
			output: "Identifies robots.txt or sitemap errors",
		},
		{
			title: "Content Optimization",
			description: "Check keyword usage",
			input: "Blog Post URL",
			output: "Missing H1, poor keyword density alerts",
		},
		{
			title: "Speed Check",
			description: "Analyze load times",
			input: "Landing Page URL",
			output: "LCP, FID, CLS metrics and fixes",
		},
	];

	const faqs = [
		{
			question: "What does the SEO score mean?",
			answer:
				"The score (0-100) represents the overall health of your page based on Google's ranking factors. A higher score means better optimization.",
		},
		{
			question: "How do I fix the errors found?",
			answer:
				"Each error comes with a 'How to Fix' guide. Simply follow the actionable steps provided in the audit report.",
		},
		{
			question: "Is this tool compatible with all websites?",
			answer:
				"Yes, our SEO Audit Tool works with any publicly accessible website, including WordPress, Shopify, Wix, and custom-coded sites.",
		},
	];

	const relatedTools = [
		{
			id: "keyword-research-tool",
			name: "Keyword Research Tool",
			description: "Find SEO keywords",
			route: "/keyword-research-tool",
			category: "seo",
		},
		{
			id: "backlink-checker",
			name: "Backlink Checker",
			description: "Check inbound links",
			route: "/backlink-checker",
			category: "seo",
		},
		{
			id: "page-speed-test",
			name: "Page Speed Test",
			description: "Analyze site speed",
			route: "/page-speed-test",
			category: "seo",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
					<div className="text-center space-y-4 mb-12">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
							Free <span className="text-primary">SEO Audit Tool</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Get a comprehensive SEO score and actionable checklist to improve
							your website's ranking.
						</p>
						<QuickActions
							toolName="SEO Audit Tool"
							toolUrl="https://30tools.com/seo-audit-tool"
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="mb-20">
						<SeoAnalyzer type="audit" title="Run Audit" />
					</div>

					{/* Content Sections */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Website Optimization Checks"
					/>

					<div className="mb-20">
						<FAQSection
							faqs={faqs}
							title="SEO Audit FAQ"
							categoryTitle="Website Optimization"
							variant="accordion"
							showSchema={true}
						/>
					</div>

					<div className="mb-20">
						<RelatedTools
							currentTool="seo-audit-tool"
							category="seo"
							tools={relatedTools}
							title="More Optimization Tools"
						/>
					</div>

					<UserComments
						toolId="seo-audit-tool"
						toolName="SEO Audit Tool"
						showStats={true}
						allowComments={true}
					/>
				</div>
			</div>
		</>
	);
}
