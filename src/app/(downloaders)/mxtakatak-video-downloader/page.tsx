import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
	keywords: "mxtakatak video downloader, free mxtakatak video downloader, online mxtakatak video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/mxtakatak-video-downloader",
	},
	openGraph: {
		title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mxtakatak-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "mxtakatak-video-downloader",
        "name": "MxTakatak Video Downloader",
        "description": "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality.",
        "route": "/mxtakatak-video-downloader",
        "extraSlugs": [
                "free-takatak-downloader-no-watermark",
                "save-mxtakatak-videos-hd"
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
						url: "https://30tools.com/mxtakatak-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="MxTakatak Video Downloader" />
			</ToolLayout>
		</>
	);
}
