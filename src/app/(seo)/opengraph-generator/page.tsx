import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free OpenGraph Meta Tags Generator Online - No Signup | 30tools",
	description: "Free OpenGraph Meta Tags Generator online. Create social media tags for better link sharing.",
	keywords: "opengraph meta tags generator, free online tool, no signup, seo, opengraph meta tags generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/opengraph-generator",
	},
	openGraph: {
		title: "Free OpenGraph Meta Tags Generator Online - No Signup | 30tools",
		description: "Free OpenGraph Meta Tags Generator online. Create social media tags for better link sharing.",
		url: "https://30tools.com/opengraph-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free OpenGraph Meta Tags Generator Online - No Signup | 30tools",
		description: "Free OpenGraph Meta Tags Generator online. Create social media tags for better link sharing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "opengraph-generator",
		"name": "OpenGraph Meta Tags Generator",
		"description": "Free OpenGraph Meta Tags Generator online. Create social media tags for better link sharing.",
		"route": "/opengraph-generator",
		"extraSlugs": [
			"og-tags-generator",
			"social-tags-maker",
			"opengraph-meta-tags"
		],
		"popular": false,
		"category": "seo"
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "OpenGraph Meta Tags Generator",
			url: "/opengraph-generator",
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
						name: "OpenGraph Meta Tags Generator",
						description: "Free OpenGraph Meta Tags Generator online. Create social media tags for better link sharing.",
						url: "https://30tools.com/opengraph-generator",
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
