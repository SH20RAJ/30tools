import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
	keywords: "tiktok downloader, download tiktok videos, tiktok video downloader, tiktok mp4, tiktok no watermark, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-downloader",
	},
	openGraph: {
		title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tiktok-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free TikTok Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark for free in HD quality. Our 2026 updated TikTok saver allows you to save videos to your camera roll or PC instantly. No registration, no ads, and 100% secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tiktok-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokDownloader />
		</ToolLayout>
	);
}
