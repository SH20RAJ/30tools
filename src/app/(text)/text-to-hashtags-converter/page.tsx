import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Text to Hashtags Converter Online – Fast & No Signup | 30tools",
	description: "Convert your text into trending hashtags for social media instantly. Our free tool helps you optimize posts for Instagram, TikTok, and Twitter with relevant, search-friendly tags. 100% free, fast, and no signup required.",
	keywords: "text to hashtags converter, free text to hashtags converter, online text to hashtags converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-hashtags-converter",
	},
	openGraph: {
		title: "Free Text to Hashtags Converter Online – Fast & No Signup | 30tools",
		description: "Convert your text into trending hashtags for social media instantly. Our free tool helps you optimize posts for Instagram, TikTok, and Twitter with relevant, search-friendly tags. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-hashtags-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Hashtags Converter Online – Fast & No Signup | 30tools",
		description: "Convert your text into trending hashtags for social media instantly. Our free tool helps you optimize posts for Instagram, TikTok, and Twitter with relevant, search-friendly tags. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-hashtags-converter",
        "name": "Text to Hashtags Converter",
        "description": "Convert your text into trending hashtags for social media instantly. Our free tool helps you optimize posts for Instagram, TikTok, and Twitter with relevant, search-friendly tags.",
        "route": "/text-to-hashtags-converter",
        "extraSlugs": [
                "free-text-to-hashtags-converter-online",
                "text-to-hashtags-converter-tool",
                "trending-instagram-hashtags",
                "best-hashtags-for-reels",
                "social-media-tag-generator"
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
						url: "https://30tools.com/text-to-hashtags-converter",
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
