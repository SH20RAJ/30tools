import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
	keywords: "pinterest video downloader, free pinterest video downloader, online pinterest video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-video-downloader",
	},
	openGraph: {
		title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pinterest-video-downloader",
        "name": "Pinterest Video Downloader",
        "description": "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF\u2014on mobile or desktop. Save favorites in 720p/1080p, and 4K when available.",
        "route": "/pinterest-video-downloader",
        "extraSlugs": [
                "how-to-download-pinterest-videos-to-camera-roll",
                "pinterest-video-download-hd",
                "pinterest-video-saver-hd",
                "save-pinterest-video"
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
						url: "https://30tools.com/pinterest-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Pinterest Video Downloader" />
			</ToolLayout>
		</>
	);
}
