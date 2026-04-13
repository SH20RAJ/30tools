import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Enrich API Key Tester Online - No Signup | 30tools",
	description: "Test your Enrich API key with the person enrichment endpoint.",
	keywords: "enrich api key tester, free online tool, no signup, developer, enrich api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/enrich",
	},
	openGraph: {
		title: "Free Enrich API Key Tester Online - No Signup | 30tools",
		description: "Test your Enrich API key with the person enrichment endpoint.",
		url: "https://30tools.com/api-key-tester/enrich",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Enrich API Key Tester Online - No Signup | 30tools",
		description: "Test your Enrich API key with the person enrichment endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "enrich-api-key-tester",
		"name": "Enrich API Key Tester",
		"description": "Test your Enrich API key with the person enrichment endpoint.",
		"route": "/api-key-tester/enrich",
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
			name: "Enrich API Key Tester",
			url: "/api-key-tester/enrich",
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
						name: "Enrich API Key Tester",
						description: "Test your Enrich API key with the person enrichment endpoint.",
						url: "https://30tools.com/api-key-tester/enrich",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
