import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RedditDownloader from "@/components/tools/downloaders/RedditDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Reddit Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Reddit Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "reddit video downloader, download reddit videos, reddit video saver, reddit to mp4, free tool, 30tools, reddit-video-downloader, free reddit-video-downloader, reddit video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/reddit-video-downloader",
	},
	openGraph: {
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Reddit Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/reddit-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Reddit Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/reddit-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RedditDownloader />
		</ToolLayout>
	);
}
