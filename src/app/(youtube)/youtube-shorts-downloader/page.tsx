import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free YouTube Shorts Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube Shorts videos in high quality for offline viewing 100% free, fast, and no signup required.",
	keywords: "youtube shorts downloader, free youtube shorts downloader, online youtube shorts downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-shorts-downloader",
	},
	openGraph: {
		title: "Free YouTube Shorts Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube Shorts videos in high quality for offline viewing 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-shorts-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Shorts Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube Shorts videos in high quality for offline viewing 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-shorts-downloader",
        "name": "YouTube Shorts Downloader",
        "description": "Download YouTube Shorts videos in high quality for offline viewing",
        "route": "/youtube-shorts-downloader",
        "extraSlugs": [
                "save-youtube-shorts-to-camera-roll",
                "shorts-video-downloader-hd",
                "download-youtube-shorts-online-free"
        ],
        "popular": true,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-shorts-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
