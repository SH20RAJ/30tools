import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Mashable Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Mashable videos and news clips online with our free tool. Save high-quality content for offline viewing instantly in your browser without any signup. 100% free, fast, and no signup required.",
	keywords: "mashable video downloader, free mashable video downloader, online mashable video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/mashable-video-downloader",
	},
	openGraph: {
		title: "Free Mashable Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Mashable videos and news clips online with our free tool. Save high-quality content for offline viewing instantly in your browser without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mashable-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mashable Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Mashable videos and news clips online with our free tool. Save high-quality content for offline viewing instantly in your browser without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "mashable-video-downloader",
        "name": "Mashable Video Downloader",
        "description": "Download Mashable videos and news clips online with our free tool. Save high-quality content for offline viewing instantly in your browser without any signup.",
        "route": "/mashable-video-downloader",
        "extraSlugs": [
                "free-mashable-downloader-online",
                "save-mashable-videos-hd"
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
						url: "https://30tools.com/mashable-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Mashable Video Downloader" />
			</ToolLayout>
		</>
	);
}
