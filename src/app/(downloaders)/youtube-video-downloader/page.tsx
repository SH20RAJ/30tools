import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
	keywords: "youtube video downloader, download youtube videos, youtube hd downloader, free video downloader, online tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-downloader",
	},
	openGraph: {
		title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
		url: "https://30tools.com/youtube-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube videos quickly in multiple formats and resolutions—free, fast, secure, no signup, and fully browser-based.",
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
			<DownloaderEngine />
		</ToolLayout>
	);
}
