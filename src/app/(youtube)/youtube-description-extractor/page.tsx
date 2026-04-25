import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Description Extractor Online – Fast & No Signup | 30tools",
	description: "Extract the full description from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
	keywords: "youtube description extractor, free youtube description extractor, online youtube description extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-description-extractor",
	},
	openGraph: {
		title: "Free YouTube Description Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the full description from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-description-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Description Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the full description from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-description-extractor",
        "name": "YouTube Description Extractor",
        "description": "Extract the full description from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool.",
        "route": "/youtube-description-extractor",
        "extraSlugs": [
                "free-youtube-description-extractor-online",
                "youtube-description-extractor-tool",
                "meta-description-length-check",
                "meta-description-test",
                "get-youtube-video-description"
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
						url: "https://30tools.com/youtube-description-extractor",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
