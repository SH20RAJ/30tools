import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
	keywords: "youtube downloader, youtube video downloader, youtube to mp4, youtube to mp3, free youtube downloader, online video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-downloader",
	},
	openGraph: {
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-downloader",
        "name": "YouTube Video/Audio Downloader",
        "description": "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported.",
        "route": "/youtube-downloader",
        "extraSlugs": [
                "download-youtube-video-for-imovie",
                "youtube-to-mp4-safe-online",
                "fast-youtube-video-downloader"
        ],
        "popular": true,
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
						url: "https://30tools.com/youtube-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<DownloaderEngine />
			</ToolLayout>
		</>
	);
}
