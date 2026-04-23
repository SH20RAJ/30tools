import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
	keywords: "facebook video downloader, free facebook video downloader, online facebook video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/facebook-video-downloader",
	},
	openGraph: {
		title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
		url: "https://30tools.com/facebook-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "facebook-video-downloader",
        "name": "Facebook Video Downloader",
        "description": "Download Facebook videos, reels, and stories in HD quality without software installation",
        "route": "/facebook-video-downloader",
        "extraSlugs": [
                "download-facebook-reels-to-gallery",
                "download-facebook-videos-hd",
                "download-story-facebook",
                "facebook-downloader",
                "facebook-hd-video-saver",
                "facebook-reels-downloader",
                "facebook-story-downloader",
                "facebook-story-saver",
                "facebook-video-saver",
                "save-facebook-video"
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
						url: "https://30tools.com/facebook-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Facebook Video Downloader" />
			</ToolLayout>
		</>
	);
}
