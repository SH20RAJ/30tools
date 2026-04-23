import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
	keywords: "gaana video downloader, free gaana video downloader, online gaana video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/gaana-video-downloader",
	},
	openGraph: {
		title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
		url: "https://30tools.com/gaana-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "gaana-video-downloader",
        "name": "Gaana Video Downloader",
        "description": "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription.",
        "route": "/gaana-video-downloader",
        "extraSlugs": [
                "free-gaana-video-downloader-online",
                "save-gaana-music-videos"
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
						url: "https://30tools.com/gaana-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Gaana Video Downloader" />
			</ToolLayout>
		</>
	);
}
