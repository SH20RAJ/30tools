import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free API Key Tester Online - No Signup | 30tools",
	description: "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
	keywords: "api key tester, free online tool, no signup, developer, api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester",
	},
	openGraph: {
		title: "Free API Key Tester Online - No Signup | 30tools",
		description: "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
		url: "https://30tools.com/api-key-tester",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free API Key Tester Online - No Signup | 30tools",
		description: "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "api-key-tester",
		"name": "API Key Tester",
		"description": "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
		"route": "/api-key-tester",
		"extraSlugs": [
				"test-openai-api-key-online-safely",
				"validate-api-keys-safely"
		],
		"popular": true,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "API Key Tester",
			url: "/api-key-tester",
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
						name: "API Key Tester",
						description: "Securely test API keys for OpenAI, Stripe, and 30+ other services directly in your browser or terminal.",
						url: "https://30tools.com/api-key-tester",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
