import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Demandbase API Key Tester Online - No Signup | 30tools",
	description: "Test your Demandbase API key with the accounts endpoint.",
	keywords: "demandbase api key tester, free online tool, no signup, developer, demandbase api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/demandbase",
	},
	openGraph: {
		title: "Free Demandbase API Key Tester Online - No Signup | 30tools",
		description: "Test your Demandbase API key with the accounts endpoint.",
		url: "https://30tools.com/api-key-tester/demandbase",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Demandbase API Key Tester Online - No Signup | 30tools",
		description: "Test your Demandbase API key with the accounts endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "demandbase-api-key-tester",
		"name": "Demandbase API Key Tester",
		"description": "Test your Demandbase API key with the accounts endpoint.",
		"route": "/api-key-tester/demandbase",
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
			name: "Demandbase API Key Tester",
			url: "/api-key-tester/demandbase",
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
						name: "Demandbase API Key Tester",
						description: "Test your Demandbase API key with the accounts endpoint.",
						url: "https://30tools.com/api-key-tester/demandbase",
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
