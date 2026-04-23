import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
	keywords: "bitchute video downloader, free bitchute video downloader, online bitchute video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/bitchute-video-downloader",
	},
	openGraph: {
		title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
		url: "https://30tools.com/bitchute-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "bitchute-video-downloader",
        "name": "Bitchute Video Downloader",
        "description": "Download your favorite Bitchute videos in one click.",
        "route": "/bitchute-video-downloader",
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
						url: "https://30tools.com/bitchute-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Bitchute Video Downloader" />
			</ToolLayout>
		</>
	);
}
