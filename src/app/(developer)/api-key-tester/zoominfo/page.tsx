import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free ZoomInfo API Key Tester Online - No Signup | 30tools",
	description: "Test your ZoomInfo API key with the contacts endpoint.",
	keywords: "zoominfo api key tester, free online tool, no signup, developer, zoominfo api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/zoominfo",
	},
	openGraph: {
		title: "Free ZoomInfo API Key Tester Online - No Signup | 30tools",
		description: "Test your ZoomInfo API key with the contacts endpoint.",
		url: "https://30tools.com/api-key-tester/zoominfo",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ZoomInfo API Key Tester Online - No Signup | 30tools",
		description: "Test your ZoomInfo API key with the contacts endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "zoominfo-api-key-tester",
		"name": "ZoomInfo API Key Tester",
		"description": "Test your ZoomInfo API key with the contacts endpoint.",
		"route": "/api-key-tester/zoominfo",
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
			name: "ZoomInfo API Key Tester",
			url: "/api-key-tester/zoominfo",
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
						name: "ZoomInfo API Key Tester",
						description: "Test your ZoomInfo API key with the contacts endpoint.",
						url: "https://30tools.com/api-key-tester/zoominfo",
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
