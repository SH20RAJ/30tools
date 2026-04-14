import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Cohere API Key Tester Online - No Signup | 30tools",
	description: "Test your Cohere API key with the generate endpoint.",
	keywords: "cohere api key tester, free online tool, no signup, developer, cohere api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/cohere",
	},
	openGraph: {
		title: "Free Cohere API Key Tester Online - No Signup | 30tools",
		description: "Test your Cohere API key with the generate endpoint.",
		url: "https://30tools.com/api-key-tester/cohere",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Cohere API Key Tester Online - No Signup | 30tools",
		description: "Test your Cohere API key with the generate endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "cohere-api-key-tester",
		"name": "Cohere API Key Tester",
		"description": "Test your Cohere API key with the generate endpoint.",
		"route": "/api-key-tester/cohere",
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
			name: "Cohere API Key Tester",
			url: "/api-key-tester/cohere",
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
						name: "Cohere API Key Tester",
						description: "Test your Cohere API key with the generate endpoint.",
						url: "https://30tools.com/api-key-tester/cohere",
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
