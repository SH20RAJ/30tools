import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
	description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
	keywords: "reddit media saver, free reddit media saver, online reddit media saver, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-media-saver",
	},
	openGraph: {
		title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
		description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/reddit-media-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
		description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "reddit-media-saver",
        "name": "Reddit Media Saver",
        "description": "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing.",
        "route": "/reddit-media-saver",
        "extraSlugs": [
                "instagram-media-saver",
                "reddit-media-saver",
                "twitter-media-saver",
                "reddit-video-downloader-hd"
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
						url: "https://30tools.com/reddit-media-saver",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Reddit Media Saver" />
			</ToolLayout>
		</>
	);
}
