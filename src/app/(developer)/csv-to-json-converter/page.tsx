import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free CSV to JSON Converter Online - No Signup | 30tools",
	description:
		"Free csv to json converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"csv to json converter, free online tool, no signup, developer, csv to json converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/csv-to-json-converter",
	},
	openGraph: {
		title: "Free CSV to JSON Converter Online - No Signup | 30tools",
		description:
			"Free csv to json converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/csv-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSV to JSON Converter Online - No Signup | 30tools",
		description:
			"Free csv to json converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "csv-to-json-converter",
		name: "CSV to JSON Converter",
		description:
			"Free csv to json converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/csv-to-json-converter",
		extraSlugs: [
			"comma-separated-to-json",
			"convert-csv-to-json",
			"convert-csv-to-json-code",
			"csv-data-to-json",
			"csv-file-to-json",
			"csv-json-parser",
			"csv-to-json",
			"csv-to-json-converter-tool",
			"csv-to-object-converter",
			"format-json-file",
			"free-csv-to-json-converter-online",
			"json-converter-from-csv",
			"json-web-token-decoder",
			"online-csv-json-tool",
			"prettify-json-online",
			"transform-csv-data",
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
			name: "CSV to JSON Converter",
			url: "/csv-to-json-converter",
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
						name: "CSV to JSON Converter",
						description:
							"Free csv to json converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/csv-to-json-converter",
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
				<ToolPlaceholderPage toolId="csv-to-json-converter" />
			</ToolLayout>
		</>
	);
}
