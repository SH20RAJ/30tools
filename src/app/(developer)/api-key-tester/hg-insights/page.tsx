import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free HG Insights API Key Tester Online - No Signup | 30tools",
	description: "Test your HG Insights API key with the companies endpoint.",
	keywords: "hg insights api key tester, free online tool, no signup, developer, hg insights api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/hg-insights",
	},
	openGraph: {
		title: "Free HG Insights API Key Tester Online - No Signup | 30tools",
		description: "Test your HG Insights API key with the companies endpoint.",
		url: "https://30tools.com/api-key-tester/hg-insights",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HG Insights API Key Tester Online - No Signup | 30tools",
		description: "Test your HG Insights API key with the companies endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "hg-insights-api-key-tester",
		"name": "HG Insights API Key Tester",
		"description": "Test your HG Insights API key with the companies endpoint.",
		"route": "/api-key-tester/hg-insights",
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
			name: "HG Insights API Key Tester",
			url: "/api-key-tester/hg-insights",
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
						name: "HG Insights API Key Tester",
						description: "Test your HG Insights API key with the companies endpoint.",
						url: "https://30tools.com/api-key-tester/hg-insights",
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
