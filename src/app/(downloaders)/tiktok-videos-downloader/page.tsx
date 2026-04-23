import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
	description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
	keywords: "tiktok videos downloader, free tiktok videos downloader, online tiktok videos downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-videos-downloader",
	},
	openGraph: {
		title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tiktok-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tiktok-videos-downloader",
        "name": "Tiktok Videos Downloader",
        "description": "Download TikTok videos without watermark\u2014free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips.",
        "route": "/tiktok-videos-downloader",
        "extraSlugs": [],
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
						url: "https://30tools.com/tiktok-videos-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Tiktok Videos Downloader" />
			</ToolLayout>
		</>
	);
}
