import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Intercom API Key Tester Online - No Signup | 30tools",
	description: "Test your Intercom access token with the me endpoint.",
	keywords: "intercom api key tester, free online tool, no signup, developer, intercom api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/intercom",
	},
	openGraph: {
		title: "Free Intercom API Key Tester Online - No Signup | 30tools",
		description: "Test your Intercom access token with the me endpoint.",
		url: "https://30tools.com/api-key-tester/intercom",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Intercom API Key Tester Online - No Signup | 30tools",
		description: "Test your Intercom access token with the me endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "intercom-api-key-tester",
		"name": "Intercom API Key Tester",
		"description": "Test your Intercom access token with the me endpoint.",
		"route": "/api-key-tester/intercom",
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
			name: "Intercom API Key Tester",
			url: "/api-key-tester/intercom",
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
						name: "Intercom API Key Tester",
						description: "Test your Intercom access token with the me endpoint.",
						url: "https://30tools.com/api-key-tester/intercom",
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
