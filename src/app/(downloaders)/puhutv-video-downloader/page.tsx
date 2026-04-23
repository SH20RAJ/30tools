import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free PuhuTv Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from PuhuTv in high resolution instantly. Our free online tool makes it easy to save your favorite Turkish series and movies for offline viewing. 100% free, fast, and no signup required.",
	keywords: "puhutv video downloader, free puhutv video downloader, online puhutv video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/puhutv-video-downloader",
	},
	openGraph: {
		title: "Free PuhuTv Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from PuhuTv in high resolution instantly. Our free online tool makes it easy to save your favorite Turkish series and movies for offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/puhutv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PuhuTv Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from PuhuTv in high resolution instantly. Our free online tool makes it easy to save your favorite Turkish series and movies for offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "puhutv-video-downloader",
        "name": "PuhuTv Video Downloader",
        "description": "Download videos from PuhuTv in high resolution instantly. Our free online tool makes it easy to save your favorite Turkish series and movies for offline viewing.",
        "route": "/puhutv-video-downloader",
        "extraSlugs": [
                "free-puhutv-downloader-online",
                "save-puhutv-series-hd"
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
						url: "https://30tools.com/puhutv-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="PuhuTv Video Downloader" />
			</ToolLayout>
		</>
	);
}
