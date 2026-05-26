import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookDownloader from "@/components/tools/downloaders/FacebookDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Facebook Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Facebook Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "facebook video downloader, download fb videos, facebook reels downloader, free video downloader, 30tools, facebook-video-downloader, free facebook-video-downloader, facebook video downloader online, online downloader, free media saver, video downloader, url downloader",
	alternates: {
		canonical: "https://30tools.com/facebook-video-downloader",
	},
	openGraph: {
		title: "Free Facebook Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Facebook Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/facebook-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Facebook Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/facebook-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookDownloader />
		</ToolLayout>
	);
}
