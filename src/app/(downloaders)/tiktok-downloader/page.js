import { DownloaderEngine } from "@/components/tools/downloaders/DownloaderEngine";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free TikTok Video Downloader Online - No Signup | 30tools",
	description:
		"Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"tiktok video downloader, free online tool, no signup, downloaders, tiktok video downloader online, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-downloader",
	},
	openGraph: {
		title: "Free TikTok Video Downloader Online - No Signup | 30tools",
		description:
			"Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/tiktok-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free TikTok Video Downloader Online - No Signup | 30tools",
		description:
			"Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "tiktok-video-downloader",
		name: "TikTok Video Downloader",
		description:
			"Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure.",
		route: "/tiktok-downloader",
		extraSlugs: [
			"download-tiktok-sound",
			"download-tiktok-video",
			"extract-tiktok-audio",
			"fast-tiktok-downloader",
			"fit-video-to-tiktok",
			"mp3-from-tiktok",
			"no-watermark-tiktok",
			"resize-video-for-tiktok",
			"save-tiktok-mp4",
			"save-tiktok-music",
			"save-tiktok-video-hd",
			"tiktok-audio-downloader",
			"tiktok-downloader-hd",
			"tiktok-downloader-without-watermark-2026",
			"tiktok-mp3-saver",
			"tiktok-saver-no-watermark",
			"tiktok-sound-downloader-mp3",
			"tiktok-video-dimensions",
			"tiktok-video-downloader-2",
			"tiktok-video-resizer",
			"tiktok-video-saver-free",
		],
		popular: true,
		category: "downloaders",
	};
	const breadcrumbs = [
		{
			name: "Downloaders Tools",
			url: "/downloaders-tools",
		},
		{
			name: "TikTok Video Downloader",
			url: "/tiktok-downloader",
		},
	];
	const relatedTools = [
		{
			id: "akillitv-video-downloader",
			name: "AkilliTv Video Downloader",
			description:
				"Download AkilliTv videos easily with our free online downloader.",
			route: "/akillitv-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bandcamp-video-downloader",
			name: "Bandcamp Video Downloader",
			description: "The easiest way to download Bandcamp videos online.",
			route: "/bandcamp-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
		{
			id: "bilibili-video-downloader",
			name: "Bilibili Video Downloader",
			description: "Download Bilibili videos online with ease.",
			route: "/bilibili-video-downloader",
			extraSlugs: [],
			popular: false,
			category: "downloaders",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "TikTok Video Downloader",
						description:
							"Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure.",
						url: "https://30tools.com/tiktok-downloader",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<DownloaderEngine placeholder="Enter URL to download..." />
			</ToolLayout>
		</>
	);
}
