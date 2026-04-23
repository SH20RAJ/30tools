import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Twitter Videos Online – Fast & No Signup | 30tools",
	description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
	keywords: "save twitter videos, free save twitter videos, online save twitter videos, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-twitter-videos",
	},
	openGraph: {
		title: "Free Save Twitter Videos Online – Fast & No Signup | 30tools",
		description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-twitter-videos",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Twitter Videos Online – Fast & No Signup | 30tools",
		description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-twitter-videos",
        "name": "Save Twitter Videos",
        "description": "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing.",
        "route": "/save-twitter-videos",
        "extraSlugs": [
                "save-snapchat-videos",
                "save-twitter-videos",
                "twitter-video-downloader-hd"
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
						url: "https://30tools.com/save-twitter-videos",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Twitter Videos" />
			</ToolLayout>
		</>
	);
}
