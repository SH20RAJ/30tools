import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Mailgun API Key Tester Online - No Signup | 30tools",
	description: "Test your Mailgun API key with the messages endpoint.",
	keywords: "mailgun api key tester, free online tool, no signup, developer, mailgun api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/mailgun",
	},
	openGraph: {
		title: "Free Mailgun API Key Tester Online - No Signup | 30tools",
		description: "Test your Mailgun API key with the messages endpoint.",
		url: "https://30tools.com/api-key-tester/mailgun",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mailgun API Key Tester Online - No Signup | 30tools",
		description: "Test your Mailgun API key with the messages endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "mailgun-api-key-tester",
		"name": "Mailgun API Key Tester",
		"description": "Test your Mailgun API key with the messages endpoint.",
		"route": "/api-key-tester/mailgun",
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
			name: "Mailgun API Key Tester",
			url: "/api-key-tester/mailgun",
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
						name: "Mailgun API Key Tester",
						description: "Test your Mailgun API key with the messages endpoint.",
						url: "https://30tools.com/api-key-tester/mailgun",
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
