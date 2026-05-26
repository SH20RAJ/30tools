import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Pinterest Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "pinterest video downloader, download pinterest videos, pinterest video saver, pin video download, free tool, 30tools, pinterest-video-downloader, free pinterest-video-downloader, pinterest video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/pinterest-video-downloader",
	},
	openGraph: {
		title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/pinterest-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PinterestDownloader />
		</ToolLayout>
	);
}
