import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TumblrVideoDownloader from "@/components/tools/downloaders/TumblrVideoDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Tumblr Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Tumblr Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "tumblr video downloader, free online tool, no signup, tumblr-video-downloader, free tumblr-video-downloader, Tumblr Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/tumblr-video-downloader",
	},
	openGraph: {
		title: "Free Tumblr Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tumblr Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/tumblr-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tumblr Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tumblr Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tumblr-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TumblrVideoDownloader />
		</ToolLayout>
	);
}
