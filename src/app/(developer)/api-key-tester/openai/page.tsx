import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free OpenAI API Key Tester Online - No Signup | 30tools",
	description: "Test your OpenAI API key with the models endpoint.",
	keywords: "openai api key tester, free online tool, no signup, developer, openai api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/openai",
	},
	openGraph: {
		title: "Free OpenAI API Key Tester Online - No Signup | 30tools",
		description: "Test your OpenAI API key with the models endpoint.",
		url: "https://30tools.com/api-key-tester/openai",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free OpenAI API Key Tester Online - No Signup | 30tools",
		description: "Test your OpenAI API key with the models endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "openai-api-key-tester",
		"name": "OpenAI API Key Tester",
		"description": "Test your OpenAI API key with the models endpoint.",
		"route": "/api-key-tester/openai",
		"extraSlugs": [
			"check-openai-usage-by-api-key",
			"test-openai-key-free"
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
			name: "OpenAI API Key Tester",
			url: "/api-key-tester/openai",
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
						name: "OpenAI API Key Tester",
						description: "Test your OpenAI API key with the models endpoint.",
						url: "https://30tools.com/api-key-tester/openai",
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
