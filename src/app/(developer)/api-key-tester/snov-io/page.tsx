import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Snov.io API Key Tester Online - No Signup | 30tools",
	description: "Test your Snov.io API key with the leads endpoint.",
	keywords: "snov.io api key tester, free online tool, no signup, developer, snov.io api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/snov-io",
	},
	openGraph: {
		title: "Free Snov.io API Key Tester Online - No Signup | 30tools",
		description: "Test your Snov.io API key with the leads endpoint.",
		url: "https://30tools.com/api-key-tester/snov-io",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snov.io API Key Tester Online - No Signup | 30tools",
		description: "Test your Snov.io API key with the leads endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "snov-io-api-key-tester",
		"name": "Snov.io API Key Tester",
		"description": "Test your Snov.io API key with the leads endpoint.",
		"route": "/api-key-tester/snov-io",
		"extraSlugs": [],
		"popular": false,
		"category": "developer"
	};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Snov.io API Key Tester",
			url: "/api-key-tester/snov-io",
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
						name: "Snov.io API Key Tester",
						description: "Test your Snov.io API key with the leads endpoint.",
						url: "https://30tools.com/api-key-tester/snov-io",
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
