import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
	keywords: "kwai video downloader, free kwai video downloader, online kwai video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/kwai-video-downloader",
	},
	openGraph: {
		title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/kwai-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "kwai-video-downloader",
        "name": "Kwai Video Downloader",
        "description": "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality.",
        "route": "/kwai-video-downloader",
        "extraSlugs": [
                "free-kwai-downloader-no-watermark",
                "save-kwai-videos-hd"
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
						url: "https://30tools.com/kwai-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Kwai Video Downloader" />
			</ToolLayout>
		</>
	);
}
