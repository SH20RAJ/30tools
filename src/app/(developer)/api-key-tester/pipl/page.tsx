import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Pipl API Key Tester Online - No Signup | 30tools",
	description: "Test your Pipl API key with the search endpoint.",
	keywords: "pipl api key tester, free online tool, no signup, developer, pipl api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/pipl",
	},
	openGraph: {
		title: "Free Pipl API Key Tester Online - No Signup | 30tools",
		description: "Test your Pipl API key with the search endpoint.",
		url: "https://30tools.com/api-key-tester/pipl",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pipl API Key Tester Online - No Signup | 30tools",
		description: "Test your Pipl API key with the search endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pipl-api-key-tester",
		"name": "Pipl API Key Tester",
		"description": "Test your Pipl API key with the search endpoint.",
		"route": "/api-key-tester/pipl",
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
			name: "Pipl API Key Tester",
			url: "/api-key-tester/pipl",
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
						name: "Pipl API Key Tester",
						description: "Test your Pipl API key with the search endpoint.",
						url: "https://30tools.com/api-key-tester/pipl",
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
