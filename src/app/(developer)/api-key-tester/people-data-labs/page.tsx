import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free People Data Labs API Key Tester Online - No Signup | 30tools",
	description: "Test your People Data Labs API key with the person enrichment endpoint.",
	keywords: "people data labs api key tester, free online tool, no signup, developer, people data labs api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/people-data-labs",
	},
	openGraph: {
		title: "Free People Data Labs API Key Tester Online - No Signup | 30tools",
		description: "Test your People Data Labs API key with the person enrichment endpoint.",
		url: "https://30tools.com/api-key-tester/people-data-labs",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free People Data Labs API Key Tester Online - No Signup | 30tools",
		description: "Test your People Data Labs API key with the person enrichment endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "people-data-labs-api-key-tester",
		"name": "People Data Labs API Key Tester",
		"description": "Test your People Data Labs API key with the person enrichment endpoint.",
		"route": "/api-key-tester/people-data-labs",
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
			name: "People Data Labs API Key Tester",
			url: "/api-key-tester/people-data-labs",
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
						name: "People Data Labs API Key Tester",
						description: "Test your People Data Labs API key with the person enrichment endpoint.",
						url: "https://30tools.com/api-key-tester/people-data-labs",
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
