import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free ShareChat Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite ShareChat videos without watermark instantly. Our free online tool helps you download viral Indian content and funny videos in high-definition quality. 100% free, fast, and no signup required.",
	keywords: "sharechat video downloader, free sharechat video downloader, online sharechat video downloader, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/sharechat-video-downloader",
	},
	openGraph: {
		title: "Free ShareChat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite ShareChat videos without watermark instantly. Our free online tool helps you download viral Indian content and funny videos in high-definition quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/sharechat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ShareChat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite ShareChat videos without watermark instantly. Our free online tool helps you download viral Indian content and funny videos in high-definition quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "sharechat-video-downloader",
        "name": "ShareChat Video Downloader",
        "description": "Save your favorite ShareChat videos without watermark instantly. Our free online tool helps you download viral Indian content and funny videos in high-definition quality.",
        "route": "/sharechat-video-downloader",
        "extraSlugs": [
                "free-sharechat-downloader-no-watermark",
                "save-sharechat-videos-hd"
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
						url: "https://30tools.com/sharechat-video-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="ShareChat Video Downloader" />
			</ToolLayout>
		</>
	);
}
