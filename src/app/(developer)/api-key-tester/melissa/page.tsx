import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Melissa API Key Tester Online - No Signup | 30tools",
	description: "Test your Melissa API key with the address verification endpoint.",
	keywords: "melissa api key tester, free online tool, no signup, developer, melissa api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/melissa",
	},
	openGraph: {
		title: "Free Melissa API Key Tester Online - No Signup | 30tools",
		description: "Test your Melissa API key with the address verification endpoint.",
		url: "https://30tools.com/api-key-tester/melissa",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Melissa API Key Tester Online - No Signup | 30tools",
		description: "Test your Melissa API key with the address verification endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "melissa-api-key-tester",
		"name": "Melissa API Key Tester",
		"description": "Test your Melissa API key with the address verification endpoint.",
		"route": "/api-key-tester/melissa",
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
			name: "Melissa API Key Tester",
			url: "/api-key-tester/melissa",
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
						name: "Melissa API Key Tester",
						description: "Test your Melissa API key with the address verification endpoint.",
						url: "https://30tools.com/api-key-tester/melissa",
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
