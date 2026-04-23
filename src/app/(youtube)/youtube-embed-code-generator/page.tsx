import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Embed Code Generator Online – Fast & No Signup | 30tools",
	description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls, and privacy settings for your website. 100% free, fast, and no signup required.",
	keywords: "youtube embed code generator, free youtube embed code generator, online youtube embed code generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-embed-code-generator",
	},
	openGraph: {
		title: "Free YouTube Embed Code Generator Online – Fast & No Signup | 30tools",
		description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls, and privacy settings for your website. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-embed-code-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Embed Code Generator Online – Fast & No Signup | 30tools",
		description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls, and privacy settings for your website. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-embed-code-generator",
        "name": "YouTube Embed Code Generator",
        "description": "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls, and privacy settings for your website.",
        "route": "/youtube-embed-code-generator",
        "extraSlugs": [
                "beautify-code-online",
                "binary-code-translator",
                "check-code-complexity",
                "clean-code-indentation",
                "code-formatter",
                "code-minifier",
                "code-optimization-tool",
                "code-prettifier",
                "compress-javascript-code",
                "find-color-code",
                "free-youtube-embed-code-generator-online",
                "minify-code-online",
                "reduce-code-size",
                "source-code-formatter",
                "sql-code-formatter",
                "validate-html-code",
                "validate-json-code",
                "youtube-embed-code-generator-tool",
                "youtube-embed-generator",
                "generate-youtube-iframe-code"
        ],
        "popular": false,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-embed-code-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
