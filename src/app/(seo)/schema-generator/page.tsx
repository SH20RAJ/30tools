import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Schema Markup Generator Online - No Signup | 30tools",
	description: "Generate JSON-LD schema markup for rich snippets",
	keywords: "schema markup generator, free online tool, no signup, seo, schema markup generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/schema-generator",
	},
	openGraph: {
		title: "Free Schema Markup Generator Online - No Signup | 30tools",
		description: "Generate JSON-LD schema markup for rich snippets",
		url: "https://30tools.com/schema-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Schema Markup Generator Online - No Signup | 30tools",
		description: "Generate JSON-LD schema markup for rich snippets",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "schema-generator",
		"name": "Schema Markup Generator",
		"description": "Generate JSON-LD schema markup for rich snippets",
		"route": "/schema-generator",
		"extraSlugs": [
			"schema-markup-builder",
			"validate-schema-markup"
		],
		"popular": true,
		"category": "seo"
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Schema Markup Generator",
			url: "/schema-generator",
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
						name: "Schema Markup Generator",
						description: "Generate JSON-LD schema markup for rich snippets",
						url: "https://30tools.com/schema-generator",
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
