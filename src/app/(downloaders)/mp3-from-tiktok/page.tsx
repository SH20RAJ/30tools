import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Mp3 From Tiktok Online – Fast & No Signup | 30tools",
	description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
	keywords: "mp3 from tiktok, free mp3 from tiktok, online mp3 from tiktok, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp3-from-tiktok",
	},
	openGraph: {
		title: "Free Mp3 From Tiktok Online – Fast & No Signup | 30tools",
		description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mp3-from-tiktok",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp3 From Tiktok Online – Fast & No Signup | 30tools",
		description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "mp3-from-tiktok",
        "name": "Mp3 From Tiktok",
        "description": "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects.",
        "route": "/mp3-from-tiktok",
        "extraSlugs": [
                "mp3-from-tiktok",
                "tiktok-audio-extractor-online"
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
						url: "https://30tools.com/mp3-from-tiktok",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Mp3 From Tiktok" />
			</ToolLayout>
		</>
	);
}
