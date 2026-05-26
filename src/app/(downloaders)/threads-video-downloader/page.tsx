import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ThreadsDownloader from "@/components/tools/downloaders/ThreadsDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Threads Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Threads Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "threads video downloader, free online tool, no signup, threads-video-downloader, free threads-video-downloader, Threads Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/threads-video-downloader",
	},
	openGraph: {
		title: "Free Threads Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Threads Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/threads-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Threads Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Threads Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/threads-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ThreadsDownloader />
		</ToolLayout>
	);
}
