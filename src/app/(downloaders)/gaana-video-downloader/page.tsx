import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import GaanaDownloader from "@/components/tools/downloaders/GaanaDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Gaana Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Gaana Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "gaana video downloader, free online tool, no signup, gaana-video-downloader, free gaana-video-downloader, Gaana Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/gaana-video-downloader",
	},
	openGraph: {
		title: "Free Gaana Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Gaana Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/gaana-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Gaana Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Gaana Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/gaana-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<GaanaDownloader />
		</ToolLayout>
	);
}
