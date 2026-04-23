import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
	description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
	keywords: "vimeo video downloader, free vimeo video downloader, online vimeo video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/vimeo-video-downloader",
	},
	openGraph: {
		title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
		description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/vimeo-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
		description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "vimeo-video-downloader",
        "name": "Vimeo Video Downloader",
        "description": "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device.",
        "route": "/vimeo-video-downloader",
        "extraSlugs": [
                "download-vimeo-videos-free",
                "vimeo-to-mp4-converter"
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
						url: "https://30tools.com/vimeo-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Vimeo Video Downloader" />
			</ToolLayout>
		</>
	);
}
