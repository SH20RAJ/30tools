import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Clearbit API Key Tester Online - No Signup | 30tools",
	description: "Test your Clearbit API key with the company enrichment endpoint.",
	keywords: "clearbit api key tester, free online tool, no signup, developer, clearbit api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/clearbit",
	},
	openGraph: {
		title: "Free Clearbit API Key Tester Online - No Signup | 30tools",
		description: "Test your Clearbit API key with the company enrichment endpoint.",
		url: "https://30tools.com/api-key-tester/clearbit",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Clearbit API Key Tester Online - No Signup | 30tools",
		description: "Test your Clearbit API key with the company enrichment endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "clearbit-api-key-tester",
		"name": "Clearbit API Key Tester",
		"description": "Test your Clearbit API key with the company enrichment endpoint.",
		"route": "/api-key-tester/clearbit",
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
			name: "Clearbit API Key Tester",
			url: "/api-key-tester/clearbit",
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
						name: "Clearbit API Key Tester",
						description: "Test your Clearbit API key with the company enrichment endpoint.",
						url: "https://30tools.com/api-key-tester/clearbit",
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
