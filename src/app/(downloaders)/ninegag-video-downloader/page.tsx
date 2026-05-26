import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import NinegagDownloader from "@/components/tools/downloaders/NinegagDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free NineGag Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free NineGag Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "ninegag video downloader, free online tool, no signup, ninegag-video-downloader, free ninegag-video-downloader, Ninegag Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/ninegag-video-downloader",
	},
	openGraph: {
		title: "Free NineGag Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free NineGag Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/ninegag-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free NineGag Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free NineGag Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ninegag-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<NinegagDownloader />
		</ToolLayout>
	);
}
