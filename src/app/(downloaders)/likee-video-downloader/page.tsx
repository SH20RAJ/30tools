import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
	keywords: "likee video downloader, free likee video downloader, online likee video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/likee-video-downloader",
	},
	openGraph: {
		title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/likee-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "likee-video-downloader",
        "name": "Likee Video Downloader",
        "description": "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices.",
        "route": "/likee-video-downloader",
        "extraSlugs": [
                "free-likee-downloader-no-watermark",
                "save-likee-videos-hd"
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
						url: "https://30tools.com/likee-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Likee Video Downloader" />
			</ToolLayout>
		</>
	);
}
