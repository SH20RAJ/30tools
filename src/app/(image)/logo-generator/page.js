import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
	ReviewSnippets,
	UserComments,
} from "@/components/seo";
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import LogoGeneratorTool from "@/components/tools/image/LogoGeneratorTool";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
	title: "Free Logo Generator Online - No Signup | 30tools",
	description:
		"Create professional logos with text, fonts, and custom colors. 100% free, no signup required, fast and secure. Works in browser. Try now! Easy and secure.",
	keywords: [
		"logo generator",
		"logo",
		"generator",
		"logo-generator",
		"image",
		"image tool",
		"free",
		"online",
		"tool",
		"30tools",
		"no signup",
		"fast",
		"secure",
		"browser-based",
		"instant",
		"easy",
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

export default async function LogoGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
		id: "logo-generator",
		name: "Logo Generator",
		description:
			"Create professional logos with text, fonts, and custom colors",
		category: "image",
		route: "/logo-generator",
		features: [
			"Supports JPEG, PNG, WebP, GIF, BMP formats",
			"Batch process multiple images",
			"High-quality output preservation",
			"Adjustable quality and compression settings",
			"100% Free - No hidden costs or subscriptions",
			"No Registration Required - Start immediately",
		],
		benefits: [],
		useCases: [],
		faqs: [
			{
				question: "Is this Logo Generator really free?",
				answer:
					"Yes! Our Logo Generator is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.",
			},
			{
				question: "Is my data secure when using Logo Generator?",
				answer:
					"Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.",
			},
			{
				question: "Do I need to create an account to use Logo Generator?",
				answer:
					"No registration required. You can start using Logo Generator immediately without creating an account or providing any personal information.",
			},
			{
				question: "Are there any file size limits for Logo Generator?",
				answer:
					"There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.",
			},
			{
				question: "Can I use Logo Generator on mobile devices?",
				answer:
					"Yes, Logo Generator is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.",
			},
			{
				question: "What file formats does Logo Generator support?",
				answer:
					"Logo Generator supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.",
			},
		],
		howTo: {
			name: "How to Use Logo Generator",
			steps: [
				{
					name: "Upload or Input",
					text: "Provide your file or input data using the upload button or text input field. Logo Generator supports drag-and-drop for convenience.",
					url: "/logo-generator#step1",
					position: 1,
				},
				{
					name: "Configure Settings",
					text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
					url: "/logo-generator#step2",
					position: 2,
				},
				{
					name: "Process & Download",
					text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
					url: "/logo-generator#step3",
					position: 3,
				},
			],
		},
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Logo Generator", url: "/logo-generator" },
	];

	// Tool features
	const features = [
		"Instant logo generation",
		"Professional icon library",
		"Curated font selection",
		"Customizable colors",
		"Adjustable layout & spacing",
		"High-resolution PNG download",
		"Transparent background",
		"100% Free for commercial use",
	];

	// Usage examples
	const examples = [
		{
			title: "Tech Startup",
			description: "Modern and clean",
			input: "Rocket Icon + Inter Font",
			output: "Minimalist Tech Logo",
		},
		{
			title: "Coffee Shop",
			description: "Warm and inviting",
			input: "Coffee Icon + Serif Font",
			output: "Classic Cafe Logo",
		},
		{
			title: "Creative Studio",
			description: "Bold and artistic",
			input: "Star Icon + Cursive Font",
			output: "Artistic Brand Logo",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("logo-generator");

	// Related tools
	const relatedTools = [
		{
			id: "favicon-generator",
			name: "Favicon Generator",
			description: "Create website favicons",
			route: "/favicon-generator",
			category: "image",
		},
		{
			id: "image-resizer",
			name: "Image Resizer",
			description: "Resize logo for social media",
			route: "/image-resizer",
			category: "image",
		},
		{
			id: "image-converter",
			name: "Image Converter",
			description: "Convert logo to different formats",
			route: "/image-converter",
			category: "image",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Enhanced Breadcrumbs with Schema */}
			<div className="container mx-auto px-4 pt-6">
				<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
			</div>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				{/* Hero Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">
						Free Online Logo Generator - Create Brand Logos Fast
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Design a professional logo for your brand in minutes. Choose from
						our library of modern icons and fonts, customize colors, and
						download a high-resolution logo PNG for free.
					</p>

					<QuickActions
						toolName="Logo Generator"
						toolUrl="https://30tools.com/logo-generator"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<LogoGeneratorTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Logo Inspiration"
				/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="logo-generator"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Create a Logo
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Enter Name</h3>
							<p className="text-muted-foreground text-sm">
								Type your brand name and optional tagline. Choose a font style.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Customize</h3>
							<p className="text-muted-foreground text-sm">
								Select an icon, adjust colors, and tweak the layout and spacing.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Get your logo as a high-quality transparent PNG instantly.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Logo Generator FAQ"
						categoryTitle="Logo Design"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="logo-generator"
						category="image"
						tools={relatedTools}
						title="More Branding Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="logo-generator"
					toolName="Logo Generator"
					showStats={true}
					allowComments={true}
				/>
			</main>

			{/* Structured Data for Tool */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([
						{
							"@context": "https://schema.org",
							"@type": "HowTo",
							name: "How to Create a Logo Online",
							step: [
								{
									"@type": "HowToStep",
									name: "Enter Name",
									text: "Type your brand name and optional tagline. Choose a font style.",
									url: "https://30tools.com/logo-generator#step1",
								},
								{
									"@type": "HowToStep",
									name: "Customize",
									text: "Select an icon, adjust colors, and tweak the layout and spacing.",
									url: "https://30tools.com/logo-generator#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Get your logo as a high-quality transparent PNG instantly.",
									url: "https://30tools.com/logo-generator#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
