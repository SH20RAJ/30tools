import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
	keywords: "youtube downloader, youtube video downloader, youtube to mp4, youtube to mp3, download youtube videos, free youtube downloader, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-downloader",
	},
	openGraph: {
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video/Audio Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos and audio in multiple formats and qualities. Our free online downloader is fast, secure, and works on all devices without signup. High-quality MP4 and MP3 supported. 100% free, fast, and no signup required.",
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
