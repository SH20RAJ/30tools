import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Buzzfeed Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download any Buzzfeed video to your device instantly. 100% free, fast, and no signup required.",
	keywords: "buzzfeed video downloader, free buzzfeed video downloader, online buzzfeed video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/buzzfeed-video-downloader",
	},
	openGraph: {
		title: "Free Buzzfeed Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download any Buzzfeed video to your device instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/buzzfeed-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Buzzfeed Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download any Buzzfeed video to your device instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "buzzfeed-video-downloader",
        "name": "Buzzfeed Video Downloader",
        "description": "Download any Buzzfeed video to your device instantly.",
        "route": "/buzzfeed-video-downloader",
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
						url: "https://30tools.com/buzzfeed-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Buzzfeed Video Downloader" />
			</ToolLayout>
		</>
	);
}
