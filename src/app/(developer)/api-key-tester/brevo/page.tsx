import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Brevo API Key Tester Online - No Signup | 30tools",
	description: "Test your Brevo (Sendinblue) API key with the send email endpoint.",
	keywords: "brevo api key tester, free online tool, no signup, developer, brevo api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/brevo",
	},
	openGraph: {
		title: "Free Brevo API Key Tester Online - No Signup | 30tools",
		description: "Test your Brevo (Sendinblue) API key with the send email endpoint.",
		url: "https://30tools.com/api-key-tester/brevo",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Brevo API Key Tester Online - No Signup | 30tools",
		description: "Test your Brevo (Sendinblue) API key with the send email endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "brevo-api-key-tester",
		"name": "Brevo API Key Tester",
		"description": "Test your Brevo (Sendinblue) API key with the send email endpoint.",
		"route": "/api-key-tester/brevo",
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
			name: "Brevo API Key Tester",
			url: "/api-key-tester/brevo",
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
						name: "Brevo API Key Tester",
						description: "Test your Brevo (Sendinblue) API key with the send email endpoint.",
						url: "https://30tools.com/api-key-tester/brevo",
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
