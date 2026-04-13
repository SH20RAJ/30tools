import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Crunchbase API Key Tester Online - No Signup | 30tools",
	description: "Test your Crunchbase API key with the organizations endpoint.",
	keywords: "crunchbase api key tester, free online tool, no signup, developer, crunchbase api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/crunchbase",
	},
	openGraph: {
		title: "Free Crunchbase API Key Tester Online - No Signup | 30tools",
		description: "Test your Crunchbase API key with the organizations endpoint.",
		url: "https://30tools.com/api-key-tester/crunchbase",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Crunchbase API Key Tester Online - No Signup | 30tools",
		description: "Test your Crunchbase API key with the organizations endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "crunchbase-api-key-tester",
		"name": "Crunchbase API Key Tester",
		"description": "Test your Crunchbase API key with the organizations endpoint.",
		"route": "/api-key-tester/crunchbase",
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
			name: "Crunchbase API Key Tester",
			url: "/api-key-tester/crunchbase",
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
						name: "Crunchbase API Key Tester",
						description: "Test your Crunchbase API key with the organizations endpoint.",
						url: "https://30tools.com/api-key-tester/crunchbase",
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
