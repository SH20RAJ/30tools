import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
	keywords: "instagram reel downloader, free instagram reel downloader, online instagram reel downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-reel-downloader",
	},
	openGraph: {
		title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-reel-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "instagram-reel-downloader",
        "name": "Instagram Reel Downloader",
        "description": "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly.",
        "route": "/instagram-reel-downloader",
        "extraSlugs": [
                "save-instagram-reels-without-watermark-online",
                "ig-reel-saver-hd",
                "download-instagram-reels-with-audio",
                "insta-reel-download-free",
                "save-ig-reels-to-gallery-1080p",
                "instagram-reel-downloader-no-signup"
        ],
        "popular": true,
        "category": "downloaders"
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
						url: "https://30tools.com/instagram-reel-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Instagram Reel Downloader" />
			</ToolLayout>
		</>
	);
}
