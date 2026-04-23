import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
	description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
	keywords: "free mp3 extractor, free free mp3 extractor, online free mp3 extractor, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/free-mp3-extractor",
	},
	openGraph: {
		title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
		description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
		url: "https://30tools.com/free-mp3-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
		description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "free-mp3-extractor",
        "name": "Free Mp3 Extractor",
        "description": "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience.",
        "route": "/free-mp3-extractor",
        "extraSlugs": [
                "free-mp3-extractor",
                "extract-audio-from-video-free"
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
						url: "https://30tools.com/free-mp3-extractor",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Free Mp3 Extractor" />
			</ToolLayout>
		</>
	);
}
