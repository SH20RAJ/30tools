import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Tiktok Videos Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Tiktok Videos Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "tiktok videos downloader, free online tool, no signup, tiktok-videos-downloader, free tiktok-videos-downloader, Tiktok Videos Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-videos-downloader",
	},
	openGraph: {
		title: "Free Tiktok Videos Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tiktok Videos Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/tiktok-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tiktok Videos Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tiktok Videos Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tiktok-videos-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokDownloader />
		</ToolLayout>
	);
}
