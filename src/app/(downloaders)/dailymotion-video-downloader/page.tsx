import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
	description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
	keywords: "dailymotion video downloader, free dailymotion video downloader, online dailymotion video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/dailymotion-video-downloader",
	},
	openGraph: {
		title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
		description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
		url: "https://30tools.com/dailymotion-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
		description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "dailymotion-video-downloader",
        "name": "Dailymotion Video Downloader",
        "description": "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
        "route": "/dailymotion-video-downloader",
        "extraSlugs": [
                "save-dailymotion-videos-hd",
                "dailymotion-to-mp4"
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
						url: "https://30tools.com/dailymotion-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Dailymotion Video Downloader" />
			</ToolLayout>
		</>
	);
}
