import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Meta Tag Analyzer Online - No Signup | 30tools",
	description: "Analyze and audit meta tags across your website. Check title tags, meta descriptions, Open Graph tags, and other SEO metadata.",
	keywords: "meta tag analyzer, free online tool, no signup, seo, meta tag analyzer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/meta-tag-analyzer",
	},
	openGraph: {
		title: "Free Meta Tag Analyzer Online - No Signup | 30tools",
		description: "Analyze and audit meta tags across your website. Check title tags, meta descriptions, Open Graph tags, and other SEO metadata.",
		url: "https://30tools.com/meta-tag-analyzer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Meta Tag Analyzer Online - No Signup | 30tools",
		description: "Analyze and audit meta tags across your website. Check title tags, meta descriptions, Open Graph tags, and other SEO metadata.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "meta-tag-analyzer",
		"name": "Meta Tag Analyzer",
		"description": "Analyze and audit meta tags across your website. Check title tags, meta descriptions, Open Graph tags, and other SEO metadata.",
		"route": "/meta-tag-analyzer",
		"extraSlugs": [
			"complexity-analyzer"
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
			name: "Meta Tag Analyzer",
			url: "/meta-tag-analyzer",
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
						name: "Meta Tag Analyzer",
						description: "Analyze and audit meta tags across your website. Check title tags, meta descriptions, Open Graph tags, and other SEO metadata.",
						url: "https://30tools.com/meta-tag-analyzer",
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
