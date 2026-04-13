import { Badge } from "@/components/ui/badge";
import ApiKeyTester from "@/components/tools/developer/ApiKeyTester/ApiKeyTester";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "API Key Tester - Securely Verify Your API Credentials | 30tools",
	description:
		"Securely test and validate your API keys for various services including OpenAI, Anthropic, Google Gemini, Stripe, and more. Free developer tool by 30tools.",
	robots: { index: true, follow: true },
};

export default async function ApiKeyToolPage({ params }) {
	const resolvedParams = await params;
	const { slug } = resolvedParams;

	const tool = {
		id: slug,
		name: slug
			.split("-")
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(" "),
		description: `Securely test your ${slug} API key.`,
		category: "developer",
		route: `/api-key-tester/${slug}`,
	};

	const breadcrumbs = [
		{ name: "Developer Tools", url: "/developer-tools" },
		{ name: "API Key Tester", url: "/api-key-tester" },
		{ name: tool.name, url: tool.route },
	];

	const relatedTools = [
		{
			id: "amazon-ses-api-key-tester",
			name: "Amazon SES API Key Tester",
			description: "Test your Amazon SES credentials with the send email endpoint.",
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
			description: "Test your Anthropic Claude API key with the messages endpoint.",
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
			extraSlugs: ["test-openai-api-key-online-safely", "validate-api-keys-safely"],
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
						name: tool.name,
						description: tool.description,
						url: `https://30tools.com${tool.route}`,
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
				<ApiKeyTester initialProvider={tool.id} />
			</ToolLayout>
		</>
	);
}
