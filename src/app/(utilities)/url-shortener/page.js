export const metadata = {
	title: "Free URL Shortener Online - No Signup | 30tools",
	description:
		"Free utility tools: URL Shortener. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser ",
	keywords: [
		"url shortener",
		"url shortener free",
		"url shortener online",
		"url shortener tool",
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

const jsonLd = generateToolJsonLd("url-shortener", "utilities", {
	name: "URL Shortener",
	description:
		"Create short, trackable links with custom aliases, QR codes, and simple click analytics for campaigns and sharing.",
});

export default async function URLShortenerPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const toolData = {
		id: "url-shortener",
		name: "URL Shortener",
		description: "Shorten long URLs for easier sharing",
		category: "utilities",
		route: "/url-shortener",
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
				question: "Is this URL Shortener really free?",
				answer:
					"Yes! Our URL Shortener is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.",
			},
			{
				question: "Is my data secure when using URL Shortener?",
				answer:
					"Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.",
			},
			{
				question: "Do I need to create an account to use URL Shortener?",
				answer:
					"No registration required. You can start using URL Shortener immediately without creating an account or providing any personal information.",
			},
			{
				question: "Are there any file size limits for URL Shortener?",
				answer:
					"There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.",
			},
			{
				question: "Can I use URL Shortener on mobile devices?",
				answer:
					"Yes, URL Shortener is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.",
			},
			{
				question: "What file formats does URL Shortener support?",
				answer:
					"URL Shortener supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.",
			},
		],
		howTo: {
			name: "How to Use URL Shortener",
			steps: [
				{
					name: "Upload or Input",
					text: "Provide your file or input data using the upload button or text input field. URL Shortener supports drag-and-drop for convenience.",
					url: "/url-shortener#step1",
					position: 1,
				},
				{
					name: "Configure Settings",
					text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
					url: "/url-shortener#step2",
					position: 2,
				},
				{
					name: "Process & Download",
					text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
					url: "/url-shortener#step3",
					position: 3,
				},
			],
		},
	};

	const features = [
		"Create Short Links Instantly",
		"Custom Aliases (Branded Links)",
		"QR Code Generation",
		"Click Analytics & Tracking",
		"No Expiration Date",
		"Edit Destination URL",
		"Bulk Shortening",
		"API Access",
	];

	const examples = [
		{
			title: "Social Media Bio",
			description: "Clean up your profile links",
			input: "https://very-long-domain.com/user/profile/ref=123",
			output: "30t.ls/myprofile",
		},
		{
			title: "Marketing Campaigns",
			description: "Track ad performance",
			input: "Landing Page URL",
			output: "Trackable link with click stats",
		},
		{
			title: "Print Media",
			description: "QR Codes for flyers",
			input: "Event Info URL",
			output: "Short link + Scannable QR Code",
		},
	];

	const faqs = [
		{
			question: "Do the links expire?",
			answer:
				"No, links created with our free URL shortener do not expire and will work indefinitely.",
		},
		{
			question: "Can I customize the back-half?",
			answer:
				"Yes! You can create custom aliases like '30t.ls/your-brand' to make your links memorable and professional.",
		},
		{
			question: "Is it safe?",
			answer:
				"Yes, we monitor all links for malware and spam. We prioritize user safety and secure redirection.",
		},
	];

	const relatedTools = [
		{
			id: "internet-speed-test",
			name: "Internet Speed Test",
			description: "Check internet speed",
			route: "/internet-speed-test",
			category: "utilities",
		},
		{
			id: "qr-code-generator",
			name: "QR Code Generator",
			description: "Create custom QR codes",
			route: "/qr-code-generator",
			category: "image",
		},
		{
			id: "backlink-checker",
			name: "Backlink Checker",
			description: "Check backlinks",
			route: "/backlink-checker",
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
				<div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
					<div className="text-center space-y-4 mb-12">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
							Free <span className="text-primary">URL Shortener</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Shorten long URLs, create branded links, and track clicks. The
							best free link shortener for marketers and creators.
						</p>
						<QuickActions
							toolName="URL Shortener"
							toolUrl="https://30tools.com/url-shortener"
							showBookmark={true}
							showShare={true}
						/>
					</div>

					<div className="mb-20">
						<URLShortenerTool />
					</div>

					{/* Content Sections */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Smart Link Management"
					/>

					<div className="mb-20">
						<FAQSection
							faqs={faqs}
							title="URL Shortener FAQ"
							categoryTitle="Link Management"
							variant="accordion"
							showSchema={true}
						/>
					</div>

					<div className="mb-20">
						<RelatedTools
							currentTool="url-shortener"
							category="utilities"
							tools={relatedTools}
							title="More Tools"
						/>
					</div>

					<UserComments
						toolId="url-shortener"
						toolName="URL Shortener"
						showStats={true}
						allowComments={true}
					/>
				</div>
			</div>
		</>
	);
}
