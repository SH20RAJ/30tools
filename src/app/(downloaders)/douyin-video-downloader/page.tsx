import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DouyinDownloader from "@/components/tools/downloaders/DouyinDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Douyin Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Douyin Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "douyin video downloader, free online tool, no signup, douyin-video-downloader, free douyin-video-downloader, Douyin Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/douyin-video-downloader",
	},
	openGraph: {
		title: "Free Douyin Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Douyin Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/douyin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Douyin Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Douyin Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/douyin-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DouyinDownloader />
		</ToolLayout>
	);
}
