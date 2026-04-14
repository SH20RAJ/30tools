import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Web Code Compressor Online - No Signup | 30tools",
	description:
		"Free Web Code Compressor online. Web Code Compressor allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"web code compressor, free online tool, no signup, developer, web code compressor online, 30tools",
	alternates: {
		canonical: "https://30tools.com/web-code-compressor",
	},
	openGraph: {
		title: "Free Web Code Compressor Online - No Signup | 30tools",
		description:
			"Free Web Code Compressor online. Web Code Compressor allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/web-code-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Web Code Compressor Online - No Signup | 30tools",
		description:
			"Free Web Code Compressor online. Web Code Compressor allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "web-code-compressor",
		name: "Web Code Compressor",
		description:
			"Free Web Code Compressor online. Web Code Compressor allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		route: "/web-code-compressor",
		extraSlugs: ["web-code-compressor"],
		category: "developer",
	};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Web Code Compressor",
			url: "/web-code-compressor",
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
						name: "Web Code Compressor",
						description:
							"Free Web Code Compressor online. Web Code Compressor allows you to format and convert code data quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/web-code-compressor",
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
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
