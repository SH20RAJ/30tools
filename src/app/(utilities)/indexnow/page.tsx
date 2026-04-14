import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free IndexNow Submitter Online - No Signup | 30tools",
	description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
	keywords: "indexnow submitter, free online tool, no signup, utilities, indexnow submitter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/indexnow",
	},
	openGraph: {
		title: "Free IndexNow Submitter Online - No Signup | 30tools",
		description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
		url: "https://30tools.com/indexnow",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IndexNow Submitter Online - No Signup | 30tools",
		description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "indexnow-submitter",
		"name": "IndexNow Submitter",
		"description": "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
		"route": "/indexnow",
		"extraSlugs": [
			"submit-url-to-bing-instantly",
			"indexnow-api-tool"
		],
		"popular": false,
		"category": "utilities"
	};
	const breadcrumbs = [
		{
			name: "Utilities Tools",
			url: "/utilities-tools",
		},
		{
			name: "IndexNow Submitter",
			url: "/indexnow",
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
						name: "IndexNow Submitter",
						description: "Submit URLs to Bing, Yandex, and other search engines instantly using the IndexNow protocol.",
						url: "https://30tools.com/indexnow",
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
