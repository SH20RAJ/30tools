import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free SendGrid API Key Tester Online - No Signup | 30tools",
	description: "Test your SendGrid API key with the mail send endpoint.",
	keywords: "sendgrid api key tester, free online tool, no signup, developer, sendgrid api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/sendgrid",
	},
	openGraph: {
		title: "Free SendGrid API Key Tester Online - No Signup | 30tools",
		description: "Test your SendGrid API key with the mail send endpoint.",
		url: "https://30tools.com/api-key-tester/sendgrid",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SendGrid API Key Tester Online - No Signup | 30tools",
		description: "Test your SendGrid API key with the mail send endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "sendgrid-api-key-tester",
		"name": "SendGrid API Key Tester",
		"description": "Test your SendGrid API key with the mail send endpoint.",
		"route": "/api-key-tester/sendgrid",
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
			name: "SendGrid API Key Tester",
			url: "/api-key-tester/sendgrid",
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
						name: "SendGrid API Key Tester",
						description: "Test your SendGrid API key with the mail send endpoint.",
						url: "https://30tools.com/api-key-tester/sendgrid",
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
