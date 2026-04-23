import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
	keywords: "universal video downloader, free universal video downloader, online universal video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/universal-video-downloader",
	},
	openGraph: {
		title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/universal-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "universal-video-downloader",
        "name": "Universal Video Downloader",
        "description": "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required.",
        "route": "/universal-video-downloader",
        "extraSlugs": [
                "download-any-video-online-free",
                "all-in-one-video-downloader"
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
						url: "https://30tools.com/universal-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Universal Video Downloader" />
			</ToolLayout>
		</>
	);
}
