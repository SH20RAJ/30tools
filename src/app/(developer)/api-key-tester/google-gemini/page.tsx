import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Google Gemini API Key Tester Online - No Signup | 30tools",
	description: "Test your Google Gemini API key with the generateContent endpoint.",
	keywords: "google gemini api key tester, free online tool, no signup, developer, google gemini api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/google-gemini",
	},
	openGraph: {
		title: "Free Google Gemini API Key Tester Online - No Signup | 30tools",
		description: "Test your Google Gemini API key with the generateContent endpoint.",
		url: "https://30tools.com/api-key-tester/google-gemini",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Google Gemini API Key Tester Online - No Signup | 30tools",
		description: "Test your Google Gemini API key with the generateContent endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "google-gemini-api-key-tester",
		"name": "Google Gemini API Key Tester",
		"description": "Test your Google Gemini API key with the generateContent endpoint.",
		"route": "/api-key-tester/google-gemini",
		"extraSlugs": [
			"test-gemini-pro-api-key",
			"google-ai-api-tester",
			"test-google-fonts",
			"google-search-console-tool",
			"google-snippet-preview",
			"google-keyword-planner-free",
			"find-google-keywords",
			"seo-keywords-google",
			"google-mobile-test",
			"google-maps-seo"
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
			name: "Google Gemini API Key Tester",
			url: "/api-key-tester/google-gemini",
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
						name: "Google Gemini API Key Tester",
						description: "Test your Google Gemini API key with the generateContent endpoint.",
						url: "https://30tools.com/api-key-tester/google-gemini",
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
