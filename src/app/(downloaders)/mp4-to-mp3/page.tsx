import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
	description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
	keywords: "mp4 to mp3, free mp4 to mp3, online mp4 to mp3, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp4-to-mp3",
	},
	openGraph: {
		title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
		description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mp4-to-mp3",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp4 To Mp3 Online – Fast & No Signup | 30tools",
		description: "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "mp4-to-mp3",
        "name": "Mp4 To Mp3",
        "description": "Convert MP4 videos to high-quality MP3 audio instantly. Our free online converter is perfect for extracting audio from social media clips and videos without any loss in sound quality.",
        "route": "/mp4-to-mp3",
        "extraSlugs": [
                "avi-file-to-mp4-online",
                "change-avi-to-mp4",
                "change-flv-to-mp4",
                "change-m4a-to-mp3",
                "change-mkv-to-mp4",
                "change-mov-to-mp4",
                "change-ogg-to-mp3",
                "change-wav-to-mp3",
                "change-webm-to-mp4",
                "compress-ogg-to-mp3",
                "compress-wav-to-mp3",
                "flv-file-to-mp4-online",
                "instagram-reels-to-mp4",
                "m4a-file-to-mp3-online",
                "m4a-to-mp3-online",
                "mkv-file-to-mp4-online",
                "mov-file-to-mp4-online",
                "mov-to-mp4",
                "mp4-to-mp3",
                "ogg-file-to-mp3-online",
                "quicktime-to-mp4",
                "tiktok-to-mp3-online",
                "wav-file-to-mp3-online",
                "webm-file-to-mp4-online",
                "youtube-to-mp3-high-quality",
                "extract-audio-from-mp4-online"
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
						url: "https://30tools.com/mp4-to-mp3",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Mp4 To Mp3" />
			</ToolLayout>
		</>
	);
}
