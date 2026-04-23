import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
	keywords: "periscope video downloader, free periscope video downloader, online periscope video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/periscope-video-downloader",
	},
	openGraph: {
		title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
		url: "https://30tools.com/periscope-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "periscope-video-downloader",
        "name": "Periscope Video Downloader",
        "description": "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears.",
        "route": "/periscope-video-downloader",
        "extraSlugs": [
                "free-periscope-downloader-online",
                "save-periscope-replays-hd"
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
						url: "https://30tools.com/periscope-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Periscope Video Downloader" />
			</ToolLayout>
		</>
	);
}
