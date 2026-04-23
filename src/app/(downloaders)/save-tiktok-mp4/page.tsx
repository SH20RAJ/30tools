import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
	description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
	keywords: "save tiktok mp4, free save tiktok mp4, online save tiktok mp4, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-tiktok-mp4",
	},
	openGraph: {
		title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
		description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-tiktok-mp4",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
		description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "save-tiktok-mp4",
        "name": "Save Tiktok Mp4",
        "description": "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software.",
        "route": "/save-tiktok-mp4",
        "extraSlugs": [
                "save-tiktok-mp4",
                "save-tiktok-music",
                "tiktok-to-mp4-online"
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
						url: "https://30tools.com/save-tiktok-mp4",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Save Tiktok Mp4" />
			</ToolLayout>
		</>
	);
}
