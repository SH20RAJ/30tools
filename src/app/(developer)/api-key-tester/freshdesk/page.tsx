import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Freshdesk API Key Tester Online - No Signup | 30tools",
	description: "Test your Freshdesk API key with the tickets endpoint.",
	keywords: "freshdesk api key tester, free online tool, no signup, developer, freshdesk api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/freshdesk",
	},
	openGraph: {
		title: "Free Freshdesk API Key Tester Online - No Signup | 30tools",
		description: "Test your Freshdesk API key with the tickets endpoint.",
		url: "https://30tools.com/api-key-tester/freshdesk",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Freshdesk API Key Tester Online - No Signup | 30tools",
		description: "Test your Freshdesk API key with the tickets endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "freshdesk-api-key-tester",
		"name": "Freshdesk API Key Tester",
		"description": "Test your Freshdesk API key with the tickets endpoint.",
		"route": "/api-key-tester/freshdesk",
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
			name: "Freshdesk API Key Tester",
			url: "/api-key-tester/freshdesk",
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
						name: "Freshdesk API Key Tester",
						description: "Test your Freshdesk API key with the tickets endpoint.",
						url: "https://30tools.com/api-key-tester/freshdesk",
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
