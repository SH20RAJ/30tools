import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free HTML Decoder Online - No Signup | 30tools",
	description:
		"Free html decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"html decoder, free online tool, no signup, developer, html decoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-decoder",
	},
	openGraph: {
		title: "Free HTML Decoder Online - No Signup | 30tools",
		description:
			"Free html decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/html-decoder",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Free%20HTML%20Decoder%20Online%20-%20No%20Signup" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Decoder Online - No Signup | 30tools",
		description:
			"Free html decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/api/og?title=Free%20HTML%20Decoder%20Online%20-%20No%20Signup"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "html-decoder",
		name: "HTML Decoder",
		description:
			"Free html decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/html-decoder",
		extraSlugs: [
			"free-html-decoder-online",
			"html-decoder-tool",
			"url-decoder",
		],
		popular: false,
		category: "developer",
	};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "HTML Decoder",
			url: "/html-decoder",
		},
	];
	const relatedTools = [
		{
			id: "amazon-ses-api-key-tester",
			name: "Amazon SES API Key Tester",
			description:
				"Test your Amazon SES credentials with the send email endpoint.",
			route: "/api-key-tester/amazon-ses",
			extraSlugs: [
				"api-docs",
				"api-endpoint-tester",
				"api-tester",
				"debug-api-requests",
				"font-tester-tool",
				"regex-flags-tester",
				"regex-match-tester",
				"regex-replace-tester",
				"regex-tester",
				"test-rest-api-online",
			],
			popular: false,
			category: "developer",
		},
		{
			id: "anthropic-api-key-tester",
			name: "Anthropic Claude API Key Tester",
			description:
				"Test your Anthropic Claude API key with the messages endpoint.",
			route: "/api-key-tester/anthropic",
			extraSlugs: ["validate-claude-api-key-online", "anthropic-api-tester"],
			popular: false,
			category: "developer",
		},
		{
			id: "api-key-tester",
			name: "API Key Tester",
			description:
				"Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
			route: "/api-key-tester",
			extraSlugs: [
				"test-openai-api-key-online-safely",
				"validate-api-keys-safely",
			],
			popular: true,
			category: "developer",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "HTML Decoder",
						description:
							"Free html decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/html-decoder",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ToolImplementation toolId="html-decoder" />
			</ToolLayout>
		</>
	);
}
