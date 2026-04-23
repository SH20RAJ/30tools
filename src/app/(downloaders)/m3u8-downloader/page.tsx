import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
	description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
	keywords: "m3u8 downloader, free m3u8 downloader, online m3u8 downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/m3u8-downloader",
	},
	openGraph: {
		title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
		description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
		url: "https://30tools.com/m3u8-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
		description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "m3u8-downloader",
        "name": "M3U8 Downloader",
        "description": "Download m3u8 playlists and convert them to high-quality MP4 videos.",
        "route": "/m3u8-downloader",
        "extraSlugs": [
                "download-m3u8-video-online",
                "m3u8-to-mp4-converter"
        ],
        "popular": false,
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
						url: "https://30tools.com/m3u8-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="M3U8 Downloader" />
			</ToolLayout>
		</>
	);
}
