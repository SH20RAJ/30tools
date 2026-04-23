import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
	keywords: "threads video downloader, free threads video downloader, online threads video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/threads-video-downloader",
	},
	openGraph: {
		title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/threads-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "threads-video-downloader",
        "name": "Threads Video Downloader",
        "description": "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices.",
        "route": "/threads-video-downloader",
        "extraSlugs": [
                "free-threads-downloader-online",
                "save-threads-videos-hd"
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
						url: "https://30tools.com/threads-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Threads Video Downloader" />
			</ToolLayout>
		</>
	);
}
