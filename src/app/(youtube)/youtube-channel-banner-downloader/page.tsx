import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
	description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
	keywords: "youtube channel banner downloader, free youtube channel banner downloader, online youtube channel banner downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-banner-downloader",
	},
	openGraph: {
		title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-banner-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-channel-banner-downloader",
        "name": "YouTube Channel Banner Downloader",
        "description": "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use.",
        "route": "/youtube-channel-banner-downloader",
        "extraSlugs": [
                "fast-youtube-downloader",
                "free-youtube-channel-banner-downloader-online",
                "secure-youtube-downloader",
                "youtube-caption-downloader",
                "youtube-channel-banner-downloader-tool",
                "youtube-downloader-4k",
                "youtube-downloader-android",
                "youtube-downloader-free",
                "youtube-downloader-iphone",
                "youtube-pack-downloader",
                "youtube-srt-downloader",
                "youtube-subtitle-downloader",
                "youtube-subtitles-downloader",
                "youtube-transcript-downloader",
                "download-youtube-banner-hd"
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
						url: "https://30tools.com/youtube-channel-banner-downloader",
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
