import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "febspot video downloader, free febspot video downloader, online febspot video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/febspot-video-downloader",
	},
	openGraph: {
		title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/febspot-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "febspot-video-downloader",
        "name": "Febspot Video Downloader",
        "description": "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure.",
        "route": "/febspot-video-downloader",
        "extraSlugs": [
                "free-febspot-downloader-online",
                "save-febspot-videos-hd"
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
						url: "https://30tools.com/febspot-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Febspot Video Downloader" />
			</ToolLayout>
		</>
	);
}
