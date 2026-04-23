import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text to Slug Converter Online – Fast & No Signup | 30tools",
	description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
	keywords: "text to slug converter, free text to slug converter, online text to slug converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-slug-converter",
	},
	openGraph: {
		title: "Free Text to Slug Converter Online – Fast & No Signup | 30tools",
		description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-slug-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Slug Converter Online – Fast & No Signup | 30tools",
		description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-slug-converter",
        "name": "Text to Slug Converter",
        "description": "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool.",
        "route": "/text-to-slug-converter",
        "extraSlugs": [
                "free-text-to-slug-converter-online",
                "text-to-slug-converter-tool",
                "url-slug-generator"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/text-to-slug-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
