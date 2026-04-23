import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
	description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
	keywords: "youtube title extractor, free youtube title extractor, online youtube title extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-extractor",
	},
	openGraph: {
		title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-title-extractor",
        "name": "YouTube Title Extractor",
        "description": "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool.",
        "route": "/youtube-title-extractor",
        "extraSlugs": [
                "free-youtube-title-extractor-online",
                "youtube-title-extractor-tool",
                "google-title-rewrites",
                "seo-title-analyzer",
                "page-title-optimization",
                "get-youtube-video-title"
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
						url: "https://30tools.com/youtube-title-extractor",
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
