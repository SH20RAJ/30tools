import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Twitter/X Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Twitter/X Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "twitter video downloader, download twitter videos, x video downloader, twitter media downloader, free tool, 30tools, twitter-video-downloader, free twitter-video-downloader, twitter video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/twitter-video-downloader",
	},
	openGraph: {
		title: "Free Twitter/X Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Twitter/X Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/twitter-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twitter/X Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Twitter/X Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/twitter-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TwitterDownloader />
		</ToolLayout>
	);
}
