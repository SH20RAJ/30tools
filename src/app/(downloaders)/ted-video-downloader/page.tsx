import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Ted Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
	keywords: "ted video downloader, free ted video downloader, online ted video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ted-video-downloader",
	},
	openGraph: {
		title: "Free Ted Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ted-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ted Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ted-video-downloader",
        "name": "Ted Video Downloader",
        "description": "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality.",
        "route": "/ted-video-downloader",
        "extraSlugs": [
                "free-ted-talks-downloader-online",
                "save-ted-videos-hd"
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
						url: "https://30tools.com/ted-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Ted Video Downloader" />
			</ToolLayout>
		</>
	);
}
