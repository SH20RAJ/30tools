import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SharechatDownloader from "@/components/tools/downloaders/SharechatDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free ShareChat Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free ShareChat Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "sharechat video downloader, free online tool, no signup, sharechat-video-downloader, free sharechat-video-downloader, Sharechat Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/sharechat-video-downloader",
	},
	openGraph: {
		title: "Free ShareChat Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free ShareChat Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/sharechat-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ShareChat Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free ShareChat Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/sharechat-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SharechatDownloader />
		</ToolLayout>
	);
}
