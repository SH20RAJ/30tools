import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Streamable Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
	keywords: "streamable video downloader, free streamable video downloader, online streamable video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/streamable-video-downloader",
	},
	openGraph: {
		title: "Free Streamable Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/streamable-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Streamable Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "streamable-video-downloader",
        "name": "Streamable Video Downloader",
        "description": "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup.",
        "route": "/streamable-video-downloader",
        "extraSlugs": [
                "free-streamable-downloader-online",
                "save-streamable-videos-hd"
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
						url: "https://30tools.com/streamable-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Streamable Video Downloader" />
			</ToolLayout>
		</>
	);
}
