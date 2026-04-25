import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
	keywords: "youtube video/audio downloader, free youtube video/audio downloader, online youtube video/audio downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-downloader",
	},
	openGraph: {
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "youtube-downloader",
        "name": "YouTube Video/Audio Downloader",
        "description": "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported.",
        "route": "/youtube-downloader",
        "extraSlugs": [
                "download-youtube-video-for-imovie",
                "youtube-to-mp4-safe-online",
                "fast-youtube-video-downloader"
        ],
        "popular": true,
        "category": "youtube"
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
						url: "https://30tools.com/youtube-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "youtube" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
