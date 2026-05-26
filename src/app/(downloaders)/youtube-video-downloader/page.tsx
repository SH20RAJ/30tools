import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free YouTube Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "youtube video downloader, download youtube videos, youtube hd downloader, free video downloader, online tool, 30tools, youtube-video-downloader, free youtube-video-downloader, youtube video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-video-downloader",
	},
	openGraph: {
		title: "Free YouTube Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free YouTube Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/youtube-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free YouTube Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
