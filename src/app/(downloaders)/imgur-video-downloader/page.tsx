import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
	keywords: "imgur video downloader, free imgur video downloader, online imgur video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/imgur-video-downloader",
	},
	openGraph: {
		title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
		url: "https://30tools.com/imgur-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "imgur-video-downloader",
        "name": "Imgur Video Downloader",
        "description": "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content.",
        "route": "/imgur-video-downloader",
        "extraSlugs": [
                "free-imgur-downloader-online",
                "save-imgur-clips-hd"
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
						url: "https://30tools.com/imgur-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Imgur Video Downloader" />
			</ToolLayout>
		</>
	);
}
