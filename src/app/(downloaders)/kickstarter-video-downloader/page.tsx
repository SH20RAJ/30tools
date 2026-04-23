import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
	keywords: "kickstarter video downloader, free kickstarter video downloader, online kickstarter video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/kickstarter-video-downloader",
	},
	openGraph: {
		title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/kickstarter-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "kickstarter-video-downloader",
        "name": "Kickstarter Video Downloader",
        "description": "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing.",
        "route": "/kickstarter-video-downloader",
        "extraSlugs": [
                "free-kickstarter-video-downloader-online",
                "save-kickstarter-campaign-videos"
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
						url: "https://30tools.com/kickstarter-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Kickstarter Video Downloader" />
			</ToolLayout>
		</>
	);
}
