import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Visual Sitemap Generator Online – Fast & No Signup | 30tools",
	description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
	keywords: "visual sitemap generator, free visual sitemap generator, online visual sitemap generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/visual-sitemap",
	},
	openGraph: {
		title: "Free Visual Sitemap Generator Online – Fast & No Signup | 30tools",
		description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
		url: "https://30tools.com/visual-sitemap",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Visual Sitemap Generator Online – Fast & No Signup | 30tools",
		description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "visual-sitemap",
        "name": "Visual Sitemap Generator",
        "description": "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy.",
        "route": "/visual-sitemap",
        "extraSlugs": [
                "visual-shadow-generator"
        ],
        "popular": true,
        "category": "seo"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/visual-sitemap",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "seo" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
