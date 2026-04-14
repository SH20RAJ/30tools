import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free LeadGenius API Key Tester Online - No Signup | 30tools",
	description: "Test your LeadGenius API key with the companies endpoint.",
	keywords: "leadgenius api key tester, free online tool, no signup, developer, leadgenius api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/leadgenius",
	},
	openGraph: {
		title: "Free LeadGenius API Key Tester Online - No Signup | 30tools",
		description: "Test your LeadGenius API key with the companies endpoint.",
		url: "https://30tools.com/api-key-tester/leadgenius",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free LeadGenius API Key Tester Online - No Signup | 30tools",
		description: "Test your LeadGenius API key with the companies endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "leadgenius-api-key-tester",
		"name": "LeadGenius API Key Tester",
		"description": "Test your LeadGenius API key with the companies endpoint.",
		"route": "/api-key-tester/leadgenius",
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
			name: "LeadGenius API Key Tester",
			url: "/api-key-tester/leadgenius",
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
						name: "LeadGenius API Key Tester",
						description: "Test your LeadGenius API key with the companies endpoint.",
						url: "https://30tools.com/api-key-tester/leadgenius",
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
