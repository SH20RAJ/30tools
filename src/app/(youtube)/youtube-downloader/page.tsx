import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video/Audio Downloader Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Video/Audio Downloader online. Fast, secure browser-based utility with no registration. 100% free.",
	keywords: "youtube downloader, youtube video downloader, youtube to mp4, youtube to mp3, download youtube videos, free youtube downloader, 30tools, youtube-downloader, free youtube-downloader, youtube downloader online, youtube tool, video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-downloader",
	},
	openGraph: {
		title: "Free YouTube Video/Audio Downloader Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Video/Audio Downloader online. Fast, secure browser-based utility with no registration. 100% free.",
		url: "https://30tools.com/youtube-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video/Audio Downloader Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Video/Audio Downloader online. Fast, secure browser-based utility with no registration. 100% free.",
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
