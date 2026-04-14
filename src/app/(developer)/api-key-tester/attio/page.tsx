import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Attio API Key Tester Online - No Signup | 30tools",
	description: "Test your Attio API key with the records endpoint.",
	keywords: "attio api key tester, free online tool, no signup, developer, attio api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/attio",
	},
	openGraph: {
		title: "Free Attio API Key Tester Online - No Signup | 30tools",
		description: "Test your Attio API key with the records endpoint.",
		url: "https://30tools.com/api-key-tester/attio",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Attio API Key Tester Online - No Signup | 30tools",
		description: "Test your Attio API key with the records endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "attio-api-key-tester",
		"name": "Attio API Key Tester",
		"description": "Test your Attio API key with the records endpoint.",
		"route": "/api-key-tester/attio",
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
			name: "Attio API Key Tester",
			url: "/api-key-tester/attio",
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
						name: "Attio API Key Tester",
						description: "Test your Attio API key with the records endpoint.",
						url: "https://30tools.com/api-key-tester/attio",
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
