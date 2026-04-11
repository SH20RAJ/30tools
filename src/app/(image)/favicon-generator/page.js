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
import FaviconGeneratorTool from "@/components/tools/image/FaviconGeneratorTool";
import { generateToolMetadata } from "@/lib/seo-helper";
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = generateToolMetadata("favicon-generator", "image");

export default async function FaviconGeneratorPage() {
	// Tool-specific data
	const toolData = {
		id: "favicon-generator",
		name: "Favicon Generator",
		description: "Create website favicons instantly in your browser",
		category: "image",
		route: "/favicon-generator",
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Favicon Generator", url: "/favicon-generator" },
	];

	// Tool features
	const features = [
		"Create favicons from text, emojis, or image uploads",
		"Live browser tab preview before download",
		"Customize colors, fonts, and rounded corners",
		"Download optimized 32x32 and 512x512 icons",
		"Fast browser-only favicon creation",
		"No signup, no uploads, 100% free",
	];

	// Usage examples
	const examples = [
		{
			title: "Brand Initials",
			description: "Create a simple letter favicon",
			input: "Text 'AB' + blue background",
			output: "Clean browser tab icon",
		},
		{
			title: "Emoji Icon",
			description: "Design a fun favicon fast",
			input: "Rocket emoji + contrast colors",
			output: "Bold emoji browser icon",
		},
		{
			title: "Logo Conversion",
			description: "Turn your logo into an icon",
			input: "Upload logo image",
			output: "Optimized favicon preview",
		},
	];

	// FAQ data
	const faqs = getImageToolFAQs("favicon-generator");

	// Related tools
	const relatedTools = [
		{
			id: "logo-generator",
			name: "Logo Generator",
			description: "Create a full logo",
			route: "/logo-generator",
			category: "image",
		},
		{
			id: "image-resizer",
			name: "Image Resizer",
			description: "Resize for social media",
			route: "/image-resizer",
			category: "image",
		},
		{
			id: "image-converter",
			name: "Image Converter",
			description: "Convert image formats",
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
			<div className="text-center mb-12 max-w-3xl mx-auto">
				<p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4">
					Free favicon design tool
				</p>
				<h1 className="text-4xl sm:text-5xl font-bold mb-4">
					Free Online Favicon Generator
				</h1>
				<p className="text-xl text-muted-foreground mb-8 leading-8">
					Create a browser-ready favicon in seconds. Use text, emojis, or upload your own image to generate a clean website icon with live preview and instant download.
				</p>
				<QuickActions
					toolName="Favicon Generator"
					toolUrl="https://30tools.com/favicon-generator"
					showBookmark={true}
					showShare={true}
				/>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
					<a
						href="#tool"
						className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
					>
						Make Favicon Now
					</a>
					<a
						href="#faq"
						className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
					>
						FAQ
					</a>
				</div>
				<p className="mt-6 text-sm text-muted-foreground">
					Fast, free, browser-only favicon generation with no signup.
				</p>
			</div>

			{/* Tool Interface */}
			<div className="mb-12" id="tool">
				<FaviconGeneratorTool />
			</div>

			{/* Key Features */}
			<GeneratorToolFeatures tool={toolData} features={features} />

			<div className="mb-12 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
				<h2 className="text-3xl font-bold mb-4">Why use this favicon generator?</h2>
				<p className="text-base leading-7 text-muted-foreground mb-6">
					Build a clean website icon without design tools. Generate favicons instantly from text, emojis, or image uploads and preview them inside a browser tab mockup.
				</p>
				<ul className="grid gap-3 sm:grid-cols-2">
					<li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
						Live favicon preview for faster design decisions.
					</li>
					<li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
						Download ready-to-use icon files instantly.
					</li>
					<li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
						No signup, no uploads, and 100% browser-based.
					</li>
					<li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium">
						Create a favicon for any website in seconds.
					</li>
				</ul>
			</div>

			<div className="mb-12 grid gap-8 lg:grid-cols-2">
				<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
					<h2 className="text-3xl font-bold mb-4">Benefits</h2>
					<ul className="space-y-3 text-sm leading-6 text-muted-foreground list-disc list-inside">
						<li>Create a favicon that looks crisp in browser tabs and bookmarks.</li>
						<li>Stay fast with instant previews and downloads.</li>
						<li>Use your brand initials, emoji, or logo image.</li>
						<li>Save time compared to manual icon design workflows.</li>
						<li>Keep your favicon creation private and secure.</li>
					</ul>
				</div>
				<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
					<h2 className="text-3xl font-bold mb-4">Use cases</h2>
					<ul className="space-y-3 text-sm leading-6 text-muted-foreground list-disc list-inside">
						<li>Build a favicon for a new website or blog.</li>
						<li>Turn your logo into a tab icon in seconds.</li>
						<li>Design a simple brand mark for landing pages.</li>
						<li>Create a recognizable icon for browser bookmarks.</li>
						<li>Experiment with emoji favicons without design software.</li>
					</ul>
				</div>
			</div>
				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Favicon Ideas"
				/>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="favicon-generator"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Create a Favicon
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Choose Mode</h3>
							<p className="text-muted-foreground text-sm">
								Select Text, Emoji, or Image mode. Enter your content or upload
								a file.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Customize</h3>
							<p className="text-muted-foreground text-sm">
								Adjust colors, fonts, size, and shape (square or rounded).
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Download your favicon in standard 32x32 size or high-resolution
								512x512.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Favicon Generator FAQ"
						categoryTitle="Favicons"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="favicon-generator"
						category="image"
						tools={relatedTools}
						title="More Web Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="favicon-generator"
					toolName="Favicon Generator"
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
							"@type": "SoftwareApplication",
							name: "Free Favicon Generator",
							description:
								"Create custom favicons for your website in seconds. Convert text, emojis, or images to high-quality favicons.",
							url: "https://30tools.com/favicon-generator",
							applicationCategory: "DesignApplication",
							operatingSystem: "Web Browser",
							offers: {
								"@type": "Offer",
								price: "0",
								priceCurrency: "USD",
							},
							creator: {
								"@type": "Organization",
								name: "30tools",
								url: "https://30tools.com",
							},
							featureList: features,
							screenshot:
								"https://30tools.com/screenshots/favicon-generator.jpg",
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "4.9",
								reviewCount: "876",
								bestRating: "5",
								worstRating: "1",
							},
						},
						{
							"@context": "https://schema.org",
							"@type": "HowTo",
							name: "How to Create a Website Favicon",
							step: [
								{
									"@type": "HowToStep",
									name: "Choose Mode",
									text: "Select Text, Emoji, or Image mode. Enter your content or upload a file.",
									url: "https://30tools.com/favicon-generator#step1",
								},
								{
									"@type": "HowToStep",
									name: "Customize",
									text: "Adjust colors, fonts, size, and shape (square or rounded).",
									url: "https://30tools.com/favicon-generator#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Download your favicon in standard 32x32 size or high-resolution 512x512.",
									url: "https://30tools.com/favicon-generator#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
