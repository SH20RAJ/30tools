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
import URLShortenerTool from "@/components/tools/utilities/URLShortenerTool";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("url-shortener", "utilities", {
	title: "URL Shortener | Free Custom Links & Analytics Tool | 30Tools",
	description:
		"Create short, trackable links with custom aliases, QR codes, and simple click analytics for campaigns and sharing.",
	image: "/og-images/url-shortener.jpg",
});

const jsonLd = generateToolJsonLd("url-shortener", "utilities", {
	name: "URL Shortener",
	description:
		"Create short, trackable links with custom aliases, QR codes, and simple click analytics for campaigns and sharing.",
});

export default async function URLShortenerPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const toolData = {
		id: "url-shortener",
		name: "URL Shortener",
		description: "Shorten and track your links",
		category: "utilities",
		route: "/url-shortener",
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
