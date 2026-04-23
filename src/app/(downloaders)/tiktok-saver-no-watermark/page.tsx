import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";


export const metadata = {
	title: "Free Tiktok Saver No Watermark Online – Fast & No Signup | 30tools",
	description: "Download TikTok videos without the annoying watermark. Our free online tool provides clean, high-definition MP4 files for your personal archive or social media projects. 100% free, fast, and no signup required.",
	keywords: "tiktok saver no watermark, free tiktok saver no watermark, online tiktok saver no watermark, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-saver-no-watermark",
	},
	openGraph: {
		title: "Free Tiktok Saver No Watermark Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without the annoying watermark. Our free online tool provides clean, high-definition MP4 files for your personal archive or social media projects. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tiktok-saver-no-watermark",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tiktok Saver No Watermark Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without the annoying watermark. Our free online tool provides clean, high-definition MP4 files for your personal archive or social media projects. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "tiktok-saver-no-watermark",
        "name": "Tiktok Saver No Watermark",
        "description": "Download TikTok videos without the annoying watermark. Our free online tool provides clean, high-definition MP4 files for your personal archive or social media projects.",
        "route": "/tiktok-saver-no-watermark",
        "extraSlugs": [
                "no-watermark-tiktok",
                "tiktok-mp3-saver",
                "tiktok-saver-no-watermark",
                "download-clean-tiktok-video"
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
						url: "https://30tools.com/tiktok-saver-no-watermark",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "downloaders" }}>
				<DownloaderEngine toolName="Tiktok Saver No Watermark" />
			</ToolLayout>
		</>
	);
}
