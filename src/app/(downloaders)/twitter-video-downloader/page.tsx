import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Twitter/X Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Twitter and X platform videos and GIFs in high quality for free 100% free, fast, and no signup required.",
	keywords: "twitter/x video downloader, free twitter/x video downloader, online twitter/x video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/twitter-video-downloader",
	},
	openGraph: {
		title: "Free Twitter/X Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Twitter and X platform videos and GIFs in high quality for free 100% free, fast, and no signup required.",
		url: "https://30tools.com/twitter-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twitter/X Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Twitter and X platform videos and GIFs in high quality for free 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "twitter-video-downloader",
        "name": "Twitter/X Video Downloader",
        "description": "Download Twitter and X platform videos and GIFs in high quality for free",
        "route": "/twitter-video-downloader",
        "extraSlugs": [
                "download-twitter-clips",
                "download-twitter-video",
                "download-twitter-video-for-iphone",
                "save-twitter-video",
                "twitter-bio-maker",
                "twitter-downloader",
                "twitter-header-size-maker",
                "twitter-media-saver",
                "twitter-video-saver",
                "x-video-downloader-online"
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
						url: "https://30tools.com/twitter-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Twitter/X Video Downloader" />
			</ToolLayout>
		</>
	);
}
