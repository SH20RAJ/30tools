import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
	keywords: "snapchat video downloader, download snapchat videos, snap video saver, snapchat stories downloader, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-video-downloader",
	},
	openGraph: {
		title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
		url: "https://30tools.com/snapchat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Snapchat videos and stories in HD quality for free without app installation 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/snapchat-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
