import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
	keywords: "douyin video downloader, free douyin video downloader, online douyin video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/douyin-video-downloader",
	},
	openGraph: {
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/douyin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "douyin-video-downloader",
        "name": "Douyin Video Downloader",
        "description": "Save Douyin videos directly to your device easily.",
        "route": "/douyin-video-downloader",
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
						url: "https://30tools.com/douyin-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Douyin Video Downloader" />
			</ToolLayout>
		</>
	);
}
