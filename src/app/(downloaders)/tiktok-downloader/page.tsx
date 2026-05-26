import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free TikTok Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free TikTok Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "tiktok downloader, download tiktok videos, tiktok video downloader, tiktok mp4, tiktok no watermark, 30tools, tiktok-downloader, free tiktok-downloader, tiktok downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/tiktok-downloader",
	},
	openGraph: {
		title: "Free TikTok Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free TikTok Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/tiktok-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free TikTok Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free TikTok Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
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
