import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Fb Video Saver Online – Fast & No Signup | 30tools",
	description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
	keywords: "fb video saver, free fb video saver, online fb video saver, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/fb-video-saver",
	},
	openGraph: {
		title: "Free Fb Video Saver Online – Fast & No Signup | 30tools",
		description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
		url: "https://30tools.com/fb-video-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fb Video Saver Online – Fast & No Signup | 30tools",
		description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "fb-video-saver",
        "name": "Fb Video Saver",
        "description": "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account.",
        "route": "/fb-video-saver",
        "extraSlugs": [
                "download-fb-video",
                "fb-story-saver",
                "fb-video-saver",
                "insta-video-saver",
                "facebook-media-downloader"
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
						url: "https://30tools.com/fb-video-saver",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Fb Video Saver" />
			</ToolLayout>
		</>
	);
}
