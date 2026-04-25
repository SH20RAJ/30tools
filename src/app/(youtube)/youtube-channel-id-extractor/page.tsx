import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
	description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
	keywords: "youtube channel id extractor, free youtube channel id extractor, online youtube channel id extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-id-extractor",
	},
	openGraph: {
		title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-id-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-id-extractor",
        "name": "YouTube Channel ID Extractor",
        "description": "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool.",
        "route": "/youtube-channel-id-extractor",
        "extraSlugs": [
                "email-extractor",
                "free-mp3-extractor",
                "free-youtube-channel-id-extractor-online",
                "url-extractor",
                "xml-sitemap-extractor",
                "youtube-channel-id-extractor-tool",
                "find-youtube-channel-id-from-url"
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
						url: "https://30tools.com/youtube-channel-id-extractor",
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
