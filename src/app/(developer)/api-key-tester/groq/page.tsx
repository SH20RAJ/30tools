import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Groq API Key Tester Online - No Signup | 30tools",
	description: "Test your Groq API key with the chat completions endpoint.",
	keywords: "groq api key tester, free online tool, no signup, developer, groq api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/groq",
	},
	openGraph: {
		title: "Free Groq API Key Tester Online - No Signup | 30tools",
		description: "Test your Groq API key with the chat completions endpoint.",
		url: "https://30tools.com/api-key-tester/groq",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Groq API Key Tester Online - No Signup | 30tools",
		description: "Test your Groq API key with the chat completions endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "groq-api-key-tester",
		"name": "Groq API Key Tester",
		"description": "Test your Groq API key with the chat completions endpoint.",
		"route": "/api-key-tester/groq",
		"extraSlugs": [
				"groq-api-test-tool-online",
				"test-groq-api-key-free"
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
			name: "Groq API Key Tester",
			url: "/api-key-tester/groq",
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
						name: "Groq API Key Tester",
						description: "Test your Groq API key with the chat completions endpoint.",
						url: "https://30tools.com/api-key-tester/groq",
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
