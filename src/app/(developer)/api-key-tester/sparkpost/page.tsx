import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free SparkPost API Key Tester Online - No Signup | 30tools",
	description: "Test your SparkPost API key with the transmissions endpoint.",
	keywords: "sparkpost api key tester, free online tool, no signup, developer, sparkpost api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/sparkpost",
	},
	openGraph: {
		title: "Free SparkPost API Key Tester Online - No Signup | 30tools",
		description: "Test your SparkPost API key with the transmissions endpoint.",
		url: "https://30tools.com/api-key-tester/sparkpost",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SparkPost API Key Tester Online - No Signup | 30tools",
		description: "Test your SparkPost API key with the transmissions endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "sparkpost-api-key-tester",
		"name": "SparkPost API Key Tester",
		"description": "Test your SparkPost API key with the transmissions endpoint.",
		"route": "/api-key-tester/sparkpost",
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
			name: "SparkPost API Key Tester",
			url: "/api-key-tester/sparkpost",
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
						name: "SparkPost API Key Tester",
						description: "Test your SparkPost API key with the transmissions endpoint.",
						url: "https://30tools.com/api-key-tester/sparkpost",
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
