import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
	description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "telegram video downloader, free telegram video downloader, online telegram video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/telegram-video-downloader",
	},
	openGraph: {
		title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/telegram-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "telegram-video-downloader",
        "name": "Telegram Video Downloader",
        "description": "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser.",
        "route": "/telegram-video-downloader",
        "extraSlugs": [
                "free-telegram-downloader-online",
                "save-telegram-videos-hd"
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
						url: "https://30tools.com/telegram-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Telegram Video Downloader" />
			</ToolLayout>
		</>
	);
}
