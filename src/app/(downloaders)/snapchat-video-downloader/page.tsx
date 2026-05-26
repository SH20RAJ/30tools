import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SnapchatDownloader from "@/components/tools/downloaders/SnapchatDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Snapchat Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "snapchat video downloader, download snapchat videos, snap video saver, snapchat stories downloader, free tool, 30tools, snapchat-video-downloader, free snapchat-video-downloader, snapchat video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/snapchat-video-downloader",
	},
	openGraph: {
		title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Snapchat Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/snapchat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Snapchat Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
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
			<SnapchatDownloader />
		</ToolLayout>
	);
}
