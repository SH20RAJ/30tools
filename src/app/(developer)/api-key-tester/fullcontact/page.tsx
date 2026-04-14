import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free FullContact API Key Tester Online - No Signup | 30tools",
	description: "Test your FullContact API key with the person enrichment endpoint.",
	keywords: "fullcontact api key tester, free online tool, no signup, developer, fullcontact api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/fullcontact",
	},
	openGraph: {
		title: "Free FullContact API Key Tester Online - No Signup | 30tools",
		description: "Test your FullContact API key with the person enrichment endpoint.",
		url: "https://30tools.com/api-key-tester/fullcontact",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free FullContact API Key Tester Online - No Signup | 30tools",
		description: "Test your FullContact API key with the person enrichment endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "fullcontact-api-key-tester",
		"name": "FullContact API Key Tester",
		"description": "Test your FullContact API key with the person enrichment endpoint.",
		"route": "/api-key-tester/fullcontact",
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
			name: "FullContact API Key Tester",
			url: "/api-key-tester/fullcontact",
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
						name: "FullContact API Key Tester",
						description: "Test your FullContact API key with the person enrichment endpoint.",
						url: "https://30tools.com/api-key-tester/fullcontact",
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
