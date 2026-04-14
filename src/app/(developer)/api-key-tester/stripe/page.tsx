import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Stripe API Key Tester Online - No Signup | 30tools",
	description: "Test your Stripe API key with the charges endpoint.",
	keywords: "stripe api key tester, free online tool, no signup, developer, stripe api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/stripe",
	},
	openGraph: {
		title: "Free Stripe API Key Tester Online - No Signup | 30tools",
		description: "Test your Stripe API key with the charges endpoint.",
		url: "https://30tools.com/api-key-tester/stripe",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Stripe API Key Tester Online - No Signup | 30tools",
		description: "Test your Stripe API key with the charges endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "stripe-api-key-tester",
		"name": "Stripe API Key Tester",
		"description": "Test your Stripe API key with the charges endpoint.",
		"route": "/api-key-tester/stripe",
		"extraSlugs": [
				"test-stripe-secret-key-online",
				"stripe-api-tester"
		],
		"popular": false,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Stripe API Key Tester",
			url: "/api-key-tester/stripe",
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
						name: "Stripe API Key Tester",
						description: "Test your Stripe API key with the charges endpoint.",
						url: "https://30tools.com/api-key-tester/stripe",
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
