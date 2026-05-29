import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "YouTube Video & Audio Downloader - Free Online | 30tools",
	description: "Download YouTube videos and audio online for free. Save clips in MP4 or extract MP3, no signup or software. For personal use of content you own or that is openly licensed.",
	keywords: "youtube downloader, youtube video downloader, youtube to mp4, youtube to mp3, download youtube videos, free youtube downloader, 30tools, youtube-downloader, youtube downloader online, video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-downloader",
	},
	openGraph: {
		title: "YouTube Video & Audio Downloader - Free Online | 30tools",
		description: "Download YouTube videos and audio online for free in MP4 or MP3, no signup. For personal use of content you own or that is openly licensed.",
		url: "https://30tools.com/youtube-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "YouTube Video & Audio Downloader - Free Online | 30tools",
		description: "Download YouTube videos and audio online for free in MP4 or MP3, no signup. For personal use of content you own or that is openly licensed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
