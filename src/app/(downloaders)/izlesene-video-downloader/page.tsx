import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
	keywords: "izlesene video downloader, free izlesene video downloader, online izlesene video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/izlesene-video-downloader",
	},
	openGraph: {
		title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/izlesene-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "izlesene-video-downloader",
        "name": "Izlesene Video Downloader",
        "description": "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup.",
        "route": "/izlesene-video-downloader",
        "extraSlugs": [
                "free-izlesene-downloader-online",
                "save-izlesene-videos-hd"
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
						url: "https://30tools.com/izlesene-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Izlesene Video Downloader" />
			</ToolLayout>
		</>
	);
}
