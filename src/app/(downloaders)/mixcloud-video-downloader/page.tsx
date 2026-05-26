import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import MixcloudDownloader from "@/components/tools/downloaders/MixcloudDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mixcloud Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Mixcloud Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "mixcloud video downloader, free online tool, no signup, mixcloud-video-downloader, free mixcloud-video-downloader, Mixcloud Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mixcloud-video-downloader",
	},
	openGraph: {
		title: "Free Mixcloud Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mixcloud Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/mixcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mixcloud Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mixcloud Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mixcloud-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<MixcloudDownloader />
		</ToolLayout>
	);
}
