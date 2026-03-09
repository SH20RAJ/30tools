import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
	ReviewSnippets,
	ToolFeatures,
	UserComments,
} from "@/components/seo";
import { DeveloperToolExamples } from "@/components/seo/DeveloperToolsHub";
import Base64Tool from "@/components/tools/developer/Base64Tool";
import { getDeveloperToolFAQs } from "@/constants/seo/developer-faqs";
import { generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("base64-tool", "developer", {
	title: "Base64 Encoder & Decoder | Free Developer Tool | 30Tools",
	description:
		"Encode and decode Base64 strings, files, and images online with secure browser-based processing.",
	image: "/og-images/base64-tool.jpg",
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

export default function Base64Page() {
	// Tool-specific data
	const toolData = {
		id: "base64-tool",
		name: "Base64 Encoder & Decoder",
		description: "Encode and decode Base64 strings and files",
		category: "developer-tools",
		route: "/base64-tool",
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Developer Tools", url: "/developer-tools" },
		{ name: "Base64 Encoder", url: "/base64-tool" },
	];

	// Tool features
	const features = [
		"Encode text to Base64",
		"Decode Base64 to text",
		"File to Base64 conversion",
		"Image to Base64 encoding",
		"Bulk processing support",
		"Copy to clipboard",
		"Format validation",
		"Client-side processing",
	];

	// Usage examples
	const examples = [
		{
			title: "Encode Text",
			description:
				"Convert text to Base64 for email transmission or data storage",
			input: "Hello, World!",
			output: "SGVsbG8sIFdvcmxkIQ==",
		},
		{
			title: "Decode Base64",
			description: "Convert Base64 back to readable text",
			input: "SGVsbG8sIFdvcmxkIQ==",
			output: "Hello, World!",
		},
		{
			title: "Data URI Creation",
			description: "Create data URIs for embedding images in web pages",
			input: "[Image File]",
			output: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
		},
	];

	// FAQ data
	const faqs = getDeveloperToolFAQs("base64-tool");

	// Related tools
	const relatedTools = [
		{
			id: "json-formatter",
			name: "JSON Formatter",
			description: "Format and validate JSON data",
			route: "/json-formatter",
			category: "developer-tools",
		},
		{
			id: "url-encoder",
			name: "URL Encoder",
			description: "Encode and decode URLs",
			route: "/url-encoder",
			category: "developer-tools",
		},
		{
			id: "hash-generator",
			name: "Hash Generator",
			description: "Generate MD5, SHA256 hashes",
			route: "/hash-generator",
			category: "developer-tools",
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
						Free Base64 Encoder & Decoder Online - Text, Files, Images
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Encode text, files & images to Base64 or decode Base64 strings.
						Secure client-side processing, supports bulk operations. Perfect for
						developers, email attachments, data URIs, and API data transmission.
					</p>

					<QuickActions
						toolName="Base64 Encoder"
						toolUrl="https://30tools.com/base64-tool"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<Base64Tool />
				</div>

				{/* Key Features */}
				<div className="mb-12">
					<ToolFeatures
						features={features}
						title="Why Choose Our Base64 Tool?"
						variant="grid"
					/>
				</div>

				{/* Usage Examples */}
				<DeveloperToolExamples tool={toolData} examples={examples} />

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="base64-tool"
						title="What Developers Say About Our Base64 Tool"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Base64 Encoder FAQ"
						categoryTitle="Base64 Encoding & Decoding"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="base64-tool"
						category="developer-tools"
						tools={relatedTools}
						title="More Developer Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="base64-tool"
					toolName="Base64 Encoder"
					showStats={true}
					allowComments={true}
				/>
			</main>

			{/* Structured Data for Tool */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Base64 Encoder & Decoder",
						description:
							"Encode text, files & images to Base64 or decode Base64 strings",
						url: "https://30tools.com/base64-tool",
						applicationCategory: "DeveloperApplication",
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
						screenshot: "https://30tools.com/screenshots/base64-tool.jpg",
					}),
				}}
			/>
		</div>
	);
}
