import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free YouTube Thumbnail Downloader online. High-speed downloading with no signup needed.",
	keywords: "youtube thumbnail downloader, download youtube thumbnails, video thumbnail grabber, free tool, 30tools, youtube-thumbnail-downloader, free youtube-thumbnail-downloader, youtube thumbnail downloader online, online downloader, free media saver, video downloader, url downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-thumbnail-downloader",
	},
	openGraph: {
		title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free YouTube Thumbnail Downloader online. High-speed downloading with no signup needed.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Thumbnail Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free YouTube Thumbnail Downloader online. High-speed downloading with no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-thumbnail-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
