import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Data Axle API Key Tester Online - No Signup | 30tools",
	description: "Test your Data Axle API key with the business lookup endpoint.",
	keywords: "data axle api key tester, free online tool, no signup, developer, data axle api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/data-axle",
	},
	openGraph: {
		title: "Free Data Axle API Key Tester Online - No Signup | 30tools",
		description: "Test your Data Axle API key with the business lookup endpoint.",
		url: "https://30tools.com/api-key-tester/data-axle",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Data Axle API Key Tester Online - No Signup | 30tools",
		description: "Test your Data Axle API key with the business lookup endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "data-axle-api-key-tester",
		"name": "Data Axle API Key Tester",
		"description": "Test your Data Axle API key with the business lookup endpoint.",
		"route": "/api-key-tester/data-axle",
		"extraSlugs": [
				"data-breach-email-search",
				"google-structured-data-helper",
				"structured-data-tester",
				"test-structured-data"
		],
		"popular": false,
		"category": "developer"
};
	const breadcrumbs = [
		{
			name: "Developer Tools",
			url: "/developer-tools",
		},
		{
			name: "Data Axle API Key Tester",
			url: "/api-key-tester/data-axle",
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
						name: "Data Axle API Key Tester",
						description: "Test your Data Axle API key with the business lookup endpoint.",
						url: "https://30tools.com/api-key-tester/data-axle",
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
