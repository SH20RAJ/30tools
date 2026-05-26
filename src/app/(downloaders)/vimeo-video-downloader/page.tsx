import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VimeoDownloader from "@/components/tools/downloaders/VimeoDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Vimeo Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Vimeo Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "vimeo downloader, download vimeo videos, vimeo video downloader, vimeo to mp4, free tool, 30tools, vimeo-video-downloader, free vimeo-video-downloader, vimeo video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/vimeo-video-downloader",
	},
	openGraph: {
		title: "Free Vimeo Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Vimeo Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/vimeo-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Vimeo Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Vimeo Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/vimeo-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<VimeoDownloader />
		</ToolLayout>
	);
}
