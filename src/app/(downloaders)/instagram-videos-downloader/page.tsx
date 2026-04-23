import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Instagram Videos Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, fast, and no signup required.",
	keywords: "instagram videos downloader, free instagram videos downloader, online instagram videos downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-videos-downloader",
	},
	openGraph: {
		title: "Free Instagram Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now! 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "instagram-videos-downloader",
        "name": "Instagram Videos Downloader",
        "description": "Download Instagram Videos, Reels, Photos, IGTV and Carousel. Save your favorite content with our easy-to-use tool. Start downloading now!",
        "route": "/instagram-videos-downloader",
        "extraSlugs": [
                "download-instagram-videos-online",
                "download-pinterest-videos",
                "download-videos-from-any-site",
                "save-snapchat-videos",
                "save-twitter-videos"
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
						url: "https://30tools.com/instagram-videos-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Instagram Videos Downloader" />
			</ToolLayout>
		</>
	);
}
