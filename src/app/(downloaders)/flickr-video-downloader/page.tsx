import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
	keywords: "flickr video downloader, free flickr video downloader, online flickr video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/flickr-video-downloader",
	},
	openGraph: {
		title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
		url: "https://30tools.com/flickr-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "flickr-video-downloader",
        "name": "Flickr Video Downloader",
        "description": "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography.",
        "route": "/flickr-video-downloader",
        "extraSlugs": [
                "free-flickr-video-downloader-online",
                "download-flickr-media-hd"
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
						url: "https://30tools.com/flickr-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Flickr Video Downloader" />
			</ToolLayout>
		</>
	);
}
