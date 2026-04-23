import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
	description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
	keywords: "mixcloud video downloader, free mixcloud video downloader, online mixcloud video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/mixcloud-video-downloader",
	},
	openGraph: {
		title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mixcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "mixcloud-video-downloader",
        "name": "Mixcloud Video Downloader",
        "description": "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere.",
        "route": "/mixcloud-video-downloader",
        "extraSlugs": [
                "free-mixcloud-downloader-online",
                "save-mixcloud-audio-hd"
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
						url: "https://30tools.com/mixcloud-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Mixcloud Video Downloader" />
			</ToolLayout>
		</>
	);
}
