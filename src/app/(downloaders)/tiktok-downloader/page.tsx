import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
	keywords: "tiktok video downloader, free tiktok video downloader, online tiktok video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-downloader",
	},
	openGraph: {
		title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tiktok-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tiktok-video-downloader",
        "name": "TikTok Video Downloader",
        "description": "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure.",
        "route": "/tiktok-downloader",
        "extraSlugs": [
                "download-tiktok-sound",
                "download-tiktok-video",
                "extract-tiktok-audio",
                "fast-tiktok-downloader",
                "fit-video-to-tiktok",
                "mp3-from-tiktok",
                "no-watermark-tiktok",
                "resize-video-for-tiktok",
                "save-tiktok-mp4",
                "save-tiktok-music",
                "save-tiktok-video-hd",
                "tiktok-audio-downloader",
                "tiktok-downloader-hd",
                "tiktok-downloader-without-watermark-2026",
                "tiktok-mp3-saver",
                "tiktok-saver-no-watermark",
                "tiktok-sound-downloader-mp3",
                "tiktok-video-dimensions",
                "tiktok-video-downloader-2",
                "tiktok-video-resizer",
                "tiktok-video-saver-free"
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
						url: "https://30tools.com/tiktok-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="TikTok Video Downloader" />
			</ToolLayout>
		</>
	);
}
