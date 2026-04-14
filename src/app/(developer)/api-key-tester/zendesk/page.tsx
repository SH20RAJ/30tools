import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Zendesk API Key Tester Online - No Signup | 30tools",
	description: "Test your Zendesk API token with the tickets endpoint.",
	keywords: "zendesk api key tester, free online tool, no signup, developer, zendesk api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/zendesk",
	},
	openGraph: {
		title: "Free Zendesk API Key Tester Online - No Signup | 30tools",
		description: "Test your Zendesk API token with the tickets endpoint.",
		url: "https://30tools.com/api-key-tester/zendesk",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Zendesk API Key Tester Online - No Signup | 30tools",
		description: "Test your Zendesk API token with the tickets endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "zendesk-api-key-tester",
		"name": "Zendesk API Key Tester",
		"description": "Test your Zendesk API token with the tickets endpoint.",
		"route": "/api-key-tester/zendesk",
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
			name: "Zendesk API Key Tester",
			url: "/api-key-tester/zendesk",
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
						name: "Zendesk API Key Tester",
						description: "Test your Zendesk API token with the tickets endpoint.",
						url: "https://30tools.com/api-key-tester/zendesk",
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
