import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
	keywords: "youtube video downloader, free youtube video downloader, online youtube video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-downloader",
	},
	openGraph: {
		title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
		url: "https://30tools.com/youtube-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-video-downloader",
        "name": "YouTube Video Downloader",
        "description": "Download YouTube videos quickly in multiple formats and resolutions\u2014free, fast, secure, no signup, and fully browser-based.",
        "route": "/youtube-video-downloader",
        "extraSlugs": [
                "youtube-video-downloader-2026"
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
						url: "https://30tools.com/youtube-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="YouTube Video Downloader" />
			</ToolLayout>
		</>
	);
}
