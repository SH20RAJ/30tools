import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DailymotionDownloader from "@/components/tools/downloaders/DailymotionDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Dailymotion Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Dailymotion Video Downloader online. High-speed downloading with no signup needed.",
	keywords: "dailymotion downloader, download dailymotion videos, dailymotion to mp4, free video tool, 30tools, dailymotion-video-downloader, dailymotion video downloader, free dailymotion-video-downloader, dailymotion video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/dailymotion-video-downloader",
	},
	openGraph: {
		title: "Free Dailymotion Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Dailymotion Video Downloader online. High-speed downloading with no signup needed.",
		url: "https://30tools.com/dailymotion-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Dailymotion Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Dailymotion Video Downloader online. High-speed downloading with no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/dailymotion-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DailymotionDownloader />
		</ToolLayout>
	);
}
