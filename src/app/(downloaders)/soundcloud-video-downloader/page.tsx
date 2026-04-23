import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
	description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
	keywords: "soundcloud video downloader, free soundcloud video downloader, online soundcloud video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/soundcloud-video-downloader",
	},
	openGraph: {
		title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/soundcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "soundcloud-video-downloader",
        "name": "Soundcloud Video Downloader",
        "description": "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup.",
        "route": "/soundcloud-video-downloader",
        "extraSlugs": [
                "free-soundcloud-downloader-online",
                "save-soundcloud-tracks-hd"
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
						url: "https://30tools.com/soundcloud-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Soundcloud Video Downloader" />
			</ToolLayout>
		</>
	);
}
