import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
	keywords: "youtube thumbnail downloader, free youtube thumbnail downloader, online youtube thumbnail downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-thumbnail-downloader",
	},
	openGraph: {
		title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-thumbnail-downloader",
        "name": "YouTube Thumbnail Downloader",
        "description": "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
        "route": "/youtube-thumbnail-downloader",
        "extraSlugs": [
                "create-youtube-thumbnail",
                "download youtube thumbnail hd",
                "free youtube thumbnail downloader",
                "free-thumbnail-design",
                "maxresdefault downloader",
                "youtube thumbnail downloader",
                "youtube thumbnail extractor",
                "youtube thumbnail grabber",
                "youtube thumbnail saver",
                "youtube video thumbnail download",
                "yt-thumbnail-maker"
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
						url: "https://30tools.com/youtube-thumbnail-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="YouTube Thumbnail Downloader" />
			</ToolLayout>
		</>
	);
}
