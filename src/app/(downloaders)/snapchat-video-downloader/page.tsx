import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
	keywords: "snapchat video downloader, free snapchat video downloader, online snapchat video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-video-downloader",
	},
	openGraph: {
		title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
		url: "https://30tools.com/snapchat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "snapchat-video-downloader",
        "name": "Snapchat Video Downloader",
        "description": "Download Snapchat videos and stories in HD quality for free without app installation",
        "route": "/snapchat-video-downloader",
        "extraSlugs": [
                "save-snapchat-stories-online",
                "snap-video-downloader-free",
                "download-snapchat-stories"
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
						url: "https://30tools.com/snapchat-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Snapchat Video Downloader" />
			</ToolLayout>
		</>
	);
}
