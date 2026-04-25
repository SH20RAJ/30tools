import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
	description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
	keywords: "text to tags converter, free text to tags converter, online text to tags converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-tags-converter",
	},
	openGraph: {
		title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
		description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-tags-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
		description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-tags-converter",
        "name": "Text to Tags Converter",
        "description": "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility.",
        "route": "/text-to-tags-converter",
        "extraSlugs": [
                "free-text-to-tags-converter-online",
                "text-to-tags-converter-tool",
                "analyze-meta-tags",
                "find-missing-alt-tags",
                "generate-meta-tags",
                "create-seo-tags",
                "html-head-tags-maker",
                "seo-tag-generator-free"
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
						url: "https://30tools.com/text-to-tags-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
