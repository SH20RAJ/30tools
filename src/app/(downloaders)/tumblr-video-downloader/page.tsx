import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
	keywords: "tumblr video downloader, free tumblr video downloader, online tumblr video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/tumblr-video-downloader",
	},
	openGraph: {
		title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tumblr-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tumblr-video-downloader",
        "name": "Tumblr Video Downloader",
        "description": "Download Tumblr videos online with our free tool.",
        "route": "/tumblr-video-downloader",
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
						url: "https://30tools.com/tumblr-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Tumblr Video Downloader" />
			</ToolLayout>
		</>
	);
}
