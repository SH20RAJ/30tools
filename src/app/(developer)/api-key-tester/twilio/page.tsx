import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Twilio API Key Tester Online - No Signup | 30tools",
	description: "Test your Twilio Account SID and Auth Token with the messages endpoint.",
	keywords: "twilio api key tester, free online tool, no signup, developer, twilio api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/twilio",
	},
	openGraph: {
		title: "Free Twilio API Key Tester Online - No Signup | 30tools",
		description: "Test your Twilio Account SID and Auth Token with the messages endpoint.",
		url: "https://30tools.com/api-key-tester/twilio",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twilio API Key Tester Online - No Signup | 30tools",
		description: "Test your Twilio Account SID and Auth Token with the messages endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "twilio-api-key-tester",
		"name": "Twilio API Key Tester",
		"description": "Test your Twilio Account SID and Auth Token with the messages endpoint.",
		"route": "/api-key-tester/twilio",
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
			name: "Twilio API Key Tester",
			url: "/api-key-tester/twilio",
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
						name: "Twilio API Key Tester",
						description: "Test your Twilio Account SID and Auth Token with the messages endpoint.",
						url: "https://30tools.com/api-key-tester/twilio",
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
