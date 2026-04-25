import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
	keywords: "terabox video downloader, free terabox video downloader, online terabox video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/terabox-downloader",
	},
	openGraph: {
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		url: "https://30tools.com/terabox-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "terabox-downloader",
        "name": "Terabox Video Downloader",
        "description": "Download Terabox videos with direct links and embed custom video players",
        "route": "/terabox-downloader",
        "extraSlugs": [
                "download-terabox-file",
                "download-terabox-videos-without-app",
                "terabox-direct-download",
                "terabox-link-downloader",
                "terabox-player-online",
                "terabox-video-player-online",
                "terabox-video-saver"
        ],
        "popular": true,
        "category": "video"
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
						url: "https://30tools.com/terabox-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "video" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
