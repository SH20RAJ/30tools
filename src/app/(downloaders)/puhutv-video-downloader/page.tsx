import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PuhutvDownloader from "@/components/tools/downloaders/PuhutvDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PuhuTv Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free PuhuTv Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "puhutv video downloader, free online tool, no signup, puhutv-video-downloader, free puhutv-video-downloader, Puhutv Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/puhutv-video-downloader",
	},
	openGraph: {
		title: "Free PuhuTv Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free PuhuTv Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/puhutv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PuhuTv Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free PuhuTv Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/puhutv-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PuhutvDownloader />
		</ToolLayout>
	);
}
