import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/shared/ToolPlaceholderPage";

export const metadata = {
	title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
	description:
		"Free hex to decimal converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"hex to decimal converter, free online tool, no signup, developer, hex to decimal converter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-decimal-converter",
	},
	openGraph: {
		title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
		description:
			"Free hex to decimal converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/hex-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
		description:
			"Free hex to decimal converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "hex-to-decimal-converter",
		name: "HEX to Decimal Converter",
		description:
			"Free hex to decimal converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		route: "/hex-to-decimal-converter",
		extraSlugs: [
			"free-hex-to-decimal-converter-online",
			"hex-to-decimal-converter-tool",
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
			name: "HEX to Decimal Converter",
			url: "/hex-to-decimal-converter",
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
						name: "HEX to Decimal Converter",
						description:
							"Free hex to decimal converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/hex-to-decimal-converter",
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
				<ToolPlaceholderPage toolId="hex-to-decimal-converter" />
			</ToolLayout>
		</>
	);
}
