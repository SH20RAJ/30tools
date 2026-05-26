import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import StreamableDownloader from "@/components/tools/downloaders/StreamableDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Streamable Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Streamable Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "streamable video downloader, free online tool, no signup, streamable-video-downloader, free streamable-video-downloader, Streamable Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/streamable-video-downloader",
	},
	openGraph: {
		title: "Free Streamable Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Streamable Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/streamable-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Streamable Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Streamable Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/streamable-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<StreamableDownloader />
		</ToolLayout>
	);
}
