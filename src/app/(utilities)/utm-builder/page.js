import {
	FAQSection,
	QuickActions,
	RelatedTools,
	UserComments,
} from "@/components/seo";
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import UTMBuilderTool from "@/components/tools/utilities/UTMBuilderTool";
import { generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("utm-builder", "utilities", {
	title: "UTM Builder | Free Campaign URL Generator | 30Tools",
	description:
		"Build tagged campaign URLs with UTM parameters for Google Analytics and marketing attribution.",
});

export default async function UTMBuilderPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const toolData = {
		id: "utm-builder",
		name: "UTM Builder",
		description: "Generate campaign URLs for tracking",
		category: "utilities",
		route: "/utm-builder",
	};

	const features = [
		"Instant URL Generation",
		"Supports All Standard UTM Tags",
		"GA4 Compatible",
		"Real-time Auto-formatting",
		"Copy to Clipboard",
		"URL Validation",
		"Mobile Friendly Interface",
		"100% Free & Private",
	];

	const examples = [
		{
			title: "Email Newsletter",
			description: "Track clicks from your weekly email",
			input: "Source: newsletter, Medium: email, Campaign: spring_sale",
			output:
				"?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale",
		},
		{
			title: "Social Media Ad",
			description: "Track Facebook ad performance",
			input: "Source: facebook, Medium: cpc, Campaign: black_friday",
			output: "?utm_source=facebook&utm_medium=cpc&utm_campaign=black_friday",
		},
		{
			title: "Guest Post",
			description: "Track traffic from guest articles",
			input: "Source: techblog, Medium: referral, Campaign: guest_post_v1",
			output:
				"?utm_source=techblog&utm_medium=referral&utm_campaign=guest_post_v1",
		},
	];

	const faqs = [
		{
			question: "What is a UTM code?",
			answer:
				"UTM (Urchin Tracking Module) codes are snippets of text added to the end of a URL to help you track where website traffic comes from if users click a link to this URL.",
		},
		{
			question: "Do UTM codes affect SEO?",
			answer:
				"Indirectly. While they don't boost ranking themselves, they help you analyze which campaigns drive traffic, allowing you to optimize your marketing strategy. Search engines generally ignore them.",
		},
		{
			question: "Which fields are required?",
			answer:
				"Typically, 'utm_source', 'utm_medium', and 'utm_campaign' are recommended to get meaningful data in Google Analytics.",
		},
	];

	const relatedTools = [
		{
			id: "url-shortener",
			name: "URL Shortener",
			description: "Shorten your UTM links",
			route: "/url-shortener",
			category: "utilities",
		},
		{
			id: "qr-code-generator",
			name: "QR Code Generator",
			description: "Turn UTM links into QR codes",
			route: "/qr-code-generator",
			category: "image",
		},
		{
			id: "seo-audit-tool",
			name: "SEO Audit Tool",
			description: "Check your landing pages",
			route: "/seo-audit-tool",
			category: "seo",
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "UTM Builder",
		applicationCategory: "BusinessApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		description:
			"Free tool to generate Google Analytics campaign URLs with UTM parameters.",
	};

	return (
		<div className="min-h-screen bg-background">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Free <span className="text-primary">UTM Builder</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						The easiest way to build campaign URLs. Add parameters to your URLs
						to track custom campaigns in Google Analytics 4.
					</p>
					<QuickActions
						toolName="UTM Builder"
						toolUrl="https://30tools.com/utm-builder"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				<div className="mb-20">
					<UTMBuilderTool />
				</div>

				{/* Content Sections */}
				<GeneratorToolFeatures tool={toolData} features={features} />
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="UTM Usage Examples"
				/>

				<div className="mb-20">
					<FAQSection
						faqs={faqs}
						title="UTM Builder FAQ"
						categoryTitle="Campaign Tracking"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				<div className="mb-20">
					<RelatedTools
						currentTool="utm-builder"
						category="utilities"
						tools={relatedTools}
						title="Use with These Tools"
					/>
				</div>

				<UserComments
					toolId="utm-builder"
					toolName="UTM Builder"
					showStats={true}
					allowComments={true}
				/>
			</div>
		</div>
	);
}
