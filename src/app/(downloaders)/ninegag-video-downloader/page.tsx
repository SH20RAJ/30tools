import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "ninegag video downloader, free ninegag video downloader, online ninegag video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ninegag-video-downloader",
	},
	openGraph: {
		title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ninegag-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ninegag-video-downloader",
        "name": "NineGag Video Downloader",
        "description": "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser.",
        "route": "/ninegag-video-downloader",
        "extraSlugs": [
                "free-9gag-downloader-online",
                "save-9gag-videos-hd"
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
						url: "https://30tools.com/ninegag-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="NineGag Video Downloader" />
			</ToolLayout>
		</>
	);
}
