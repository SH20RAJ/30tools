import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Pipedrive API Key Tester Online - No Signup | 30tools",
	description: "Test your Pipedrive API token with the deals endpoint.",
	keywords: "pipedrive api key tester, free online tool, no signup, developer, pipedrive api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/pipedrive",
	},
	openGraph: {
		title: "Free Pipedrive API Key Tester Online - No Signup | 30tools",
		description: "Test your Pipedrive API token with the deals endpoint.",
		url: "https://30tools.com/api-key-tester/pipedrive",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pipedrive API Key Tester Online - No Signup | 30tools",
		description: "Test your Pipedrive API token with the deals endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pipedrive-api-key-tester",
		"name": "Pipedrive API Key Tester",
		"description": "Test your Pipedrive API token with the deals endpoint.",
		"route": "/api-key-tester/pipedrive",
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
			name: "Pipedrive API Key Tester",
			url: "/api-key-tester/pipedrive",
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
						name: "Pipedrive API Key Tester",
						description: "Test your Pipedrive API token with the deals endpoint.",
						url: "https://30tools.com/api-key-tester/pipedrive",
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
