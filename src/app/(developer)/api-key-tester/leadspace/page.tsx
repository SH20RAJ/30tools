import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Leadspace API Key Tester Online - No Signup | 30tools",
	description: "Test your Leadspace API key with the contacts endpoint.",
	keywords: "leadspace api key tester, free online tool, no signup, developer, leadspace api key tester online, 30tools",
	alternates: {
		canonical: "https://30tools.com/api-key-tester/leadspace",
	},
	openGraph: {
		title: "Free Leadspace API Key Tester Online - No Signup | 30tools",
		description: "Test your Leadspace API key with the contacts endpoint.",
		url: "https://30tools.com/api-key-tester/leadspace",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Leadspace API Key Tester Online - No Signup | 30tools",
		description: "Test your Leadspace API key with the contacts endpoint.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "leadspace-api-key-tester",
		"name": "Leadspace API Key Tester",
		"description": "Test your Leadspace API key with the contacts endpoint.",
		"route": "/api-key-tester/leadspace",
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
			name: "Leadspace API Key Tester",
			url: "/api-key-tester/leadspace",
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
						name: "Leadspace API Key Tester",
						description: "Test your Leadspace API key with the contacts endpoint.",
						url: "https://30tools.com/api-key-tester/leadspace",
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
