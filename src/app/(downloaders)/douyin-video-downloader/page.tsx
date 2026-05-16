import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
	keywords: "douyin video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/douyin-video-downloader",
	},
	openGraph: {
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/douyin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "douyin-video-downloader",
        "name": "Douyin Video Downloader",
        "description": "Save Douyin videos directly to your device easily.",
        "route": "/douyin-video-downloader",
        "extraSlugs": [],
        "popular": false,
        "category": "downloaders",
		"features": [
			"Download Douyin Videos Without the Watermark",
			"Save High-Definition MP4 Video Files",
			"Extract Audio Tracks as MP3",
			"No Login or Douyin Account Required",
			"Works Instantly on Any Device"
		],
		"article": `
## Save Douyin Videos Without Watermarks
Douyin (the Chinese version of TikTok) is filled with incredible creative content, tutorials, and trends. However, saving videos directly from the app often leaves an intrusive, bouncing watermark that ruins the viewing experience. Our Douyin Video Downloader extracts the clean, original video file directly from the platform's servers.

### Lawful Use Notice
**Important:** You should only download videos for personal, offline viewing. Do not re-upload creators' videos to other platforms (like TikTok, Instagram, or YouTube) without their explicit permission. Respect copyright and intellectual property rights.

### Platform-Specific Limitations
Douyin frequently updates its video delivery infrastructure to prevent unauthorized scraping. While our tool uses advanced link resolution, some private videos, deleted content, or region-locked media may not be accessible. Additionally, very long videos might take slightly longer to fetch.
		`,
		"howTo": {
			"name": "How to Download Douyin Videos",
			"steps": [
				{
					"name": "Copy the Douyin Share Link",
					"text": "Open the Douyin app, find the video, tap the 'Share' icon, and select 'Copy Link'."
				},
				{
					"name": "Paste the Link",
					"text": "Return to our downloader and paste the copied text into the input box. The tool will automatically extract the URL from the Chinese text."
				},
				{
					"name": "Choose Video or Audio",
					"text": "Once fetched, you can choose to download the watermark-free MP4 video or just the extracted MP3 audio track."
				},
				{
					"name": "Download to Your Device",
					"text": "Click the download button and the file will be saved directly to your phone or computer."
				}
			]
		},
		"faqs": [
			{
				"question": "Is it free to remove the Douyin watermark?",
				"answer": "Yes! Our tool is completely free and automatically delivers the watermark-free version of the video if it is available on Douyin's servers."
			},
			{
				"question": "Can I download Douyin videos on my iPhone?",
				"answer": "Yes. If you are using iOS 13 or later, Safari supports direct file downloads. Just tap download, and it will save to your Files app or Camera Roll."
			},
			{
				"question": "Why does the tool say the link is invalid?",
				"answer": "Ensure you are pasting the correct share link from the Douyin app. The video must be public; private or deleted videos cannot be downloaded."
			}
		]
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
						url: "https://30tools.com/douyin-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Douyin Video Downloader" />
			</ToolLayout>
		</>
	);
}
