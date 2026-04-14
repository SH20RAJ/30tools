import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Resend API Key Tester Online - No Signup | 30tools",
	description: "Test your Resend API key with the emails endpoint.",
	keywords: "resend api key tester, free online tool, no signup, developer, resend api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/resend",
	},
	openGraph: {
		title: "Free Resend API Key Tester Online - No Signup | 30tools",
		description: "Test your Resend API key with the emails endpoint.",
		url: "https://30tools.com/api-key-tester/resend",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resend API Key Tester Online - No Signup | 30tools",
		description: "Test your Resend API key with the emails endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "resend-api-key-tester",
		"name": "Resend API Key Tester",
		"description": "Test your Resend API key with the emails endpoint.",
		"route": "/api-key-tester/resend",
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
			name: "Resend API Key Tester",
			url: "/api-key-tester/resend",
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
						name: "Resend API Key Tester",
						description: "Test your Resend API key with the emails endpoint.",
						url: "https://30tools.com/api-key-tester/resend",
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
