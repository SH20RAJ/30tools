import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Amazon SES API Key Tester Online - No Signup | 30tools",
	description: "Test your Amazon SES credentials with the send email endpoint.",
	keywords: "amazon ses api key tester, free online tool, no signup, developer, amazon ses api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/amazon-ses",
	},
	openGraph: {
		title: "Free Amazon SES API Key Tester Online - No Signup | 30tools",
		description: "Test your Amazon SES credentials with the send email endpoint.",
		url: "https://30tools.com/api-key-tester/amazon-ses",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Amazon SES API Key Tester Online - No Signup | 30tools",
		description: "Test your Amazon SES credentials with the send email endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "amazon-ses-api-key-tester",
		"name": "Amazon SES API Key Tester",
		"description": "Test your Amazon SES credentials with the send email endpoint.",
		"route": "/api-key-tester/amazon-ses",
		"extraSlugs": [
				"api-docs",
				"api-endpoint-tester",
				"api-tester",
				"debug-api-requests",
				"font-tester-tool",
				"regex-flags-tester",
				"regex-match-tester",
				"regex-replace-tester",
				"regex-tester",
				"test-rest-api-online"
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
			name: "Amazon SES API Key Tester",
			url: "/api-key-tester/amazon-ses",
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
						name: "Amazon SES API Key Tester",
						description: "Test your Amazon SES credentials with the send email endpoint.",
						url: "https://30tools.com/api-key-tester/amazon-ses",
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
