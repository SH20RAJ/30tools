import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
	keywords: "linkedin video downloader, free linkedin video downloader, online linkedin video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/linkedin-video-downloader",
	},
	openGraph: {
		title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
		url: "https://30tools.com/linkedin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "linkedin-video-downloader",
        "name": "Linkedin Video Downloader",
        "description": "Download LinkedIn videos in high quality\u2014free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps\u2014just fast processing and a clean, simple interface that helps you save videos quickly.",
        "route": "/linkedin-video-downloader",
        "extraSlugs": [
                "save-linkedin-video-online-free",
                "linkedin-video-grabber"
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
						url: "https://30tools.com/linkedin-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Linkedin Video Downloader" />
			</ToolLayout>
		</>
	);
}
