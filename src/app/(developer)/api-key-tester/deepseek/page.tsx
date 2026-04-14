import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free DeepSeek API Key Tester Online - No Signup | 30tools",
	description: "Test your DeepSeek API key with the chat completions endpoint.",
	keywords: "deepseek api key tester, free online tool, no signup, developer, deepseek api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/deepseek",
	},
	openGraph: {
		title: "Free DeepSeek API Key Tester Online - No Signup | 30tools",
		description: "Test your DeepSeek API key with the chat completions endpoint.",
		url: "https://30tools.com/api-key-tester/deepseek",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free DeepSeek API Key Tester Online - No Signup | 30tools",
		description: "Test your DeepSeek API key with the chat completions endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "deepseek-api-key-tester",
		"name": "DeepSeek API Key Tester",
		"description": "Test your DeepSeek API key with the chat completions endpoint.",
		"route": "/api-key-tester/deepseek",
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
			name: "DeepSeek API Key Tester",
			url: "/api-key-tester/deepseek",
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
						name: "DeepSeek API Key Tester",
						description: "Test your DeepSeek API key with the chat completions endpoint.",
						url: "https://30tools.com/api-key-tester/deepseek",
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
