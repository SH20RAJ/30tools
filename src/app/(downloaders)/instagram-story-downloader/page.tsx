import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Instagram Story Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
	keywords: "instagram story downloader, free instagram story downloader, online instagram story downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-story-downloader",
	},
	openGraph: {
		title: "Free Instagram Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "instagram-story-downloader",
        "name": "Instagram Story Downloader",
        "description": "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required.",
        "route": "/instagram-story-downloader",
        "extraSlugs": [
                "fb-story-saver",
                "fit-photo-to-instagram-story",
                "insta-story-saver",
                "instagram-anonymous-story-viewer",
                "instagram-story-dimensions-fix",
                "instagram-story-resizer",
                "instagram-story-viewer",
                "instagram-story-viewer-download",
                "instagram-viewer-story",
                "resize-for-instagram-story",
                "save-instagram-story-anonymous"
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
						url: "https://30tools.com/instagram-story-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Instagram Story Downloader" />
			</ToolLayout>
		</>
	);
}
