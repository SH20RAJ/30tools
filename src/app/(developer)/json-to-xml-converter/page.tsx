import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free JSON to XML Converter Online - No Signup | 30tools",
	description:
		"Free json to xml converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"json to xml converter, free online tool, no signup, developer, json to xml converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-xml-converter",
	},
	openGraph: {
		title: "Free JSON to XML Converter Online - No Signup | 30tools",
		description:
			"Free json to xml converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/json-to-xml-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to XML Converter Online - No Signup | 30tools",
		description:
			"Free json to xml converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "json-to-xml-converter",
		name: "JSON to XML Converter",
		description:
			"Free json to xml converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/json-to-xml-converter",
		extraSlugs: [
			"beautify-xml-online",
			"convert-xml-to-json",
			"create-xml-sitemap",
			"format-xml-file",
			"free-json-to-xml-converter-online",
			"json-to-xml-converter-tool",
			"online-xml-converter",
			"parse-xml-to-json",
			"validate-xml-format",
			"xml-data-converter",
			"xml-file-to-json",
			"xml-indenter",
			"xml-pretty-print",
			"xml-sitemap-analyzer",
			"xml-sitemap-builder",
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
			name: "JSON to XML Converter",
			url: "/json-to-xml-converter",
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
						name: "JSON to XML Converter",
						description:
							"Free json to xml converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/json-to-xml-converter",
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
				<ToolPlaceholderPage toolId="json-to-xml-converter" />
			</ToolLayout>
		</>
	);
}
