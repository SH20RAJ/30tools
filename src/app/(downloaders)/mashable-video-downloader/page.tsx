import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import MashableDownloader from "@/components/tools/downloaders/MashableDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mashable Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Mashable Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "mashable video downloader, free online tool, no signup, mashable-video-downloader, free mashable-video-downloader, Mashable Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mashable-video-downloader",
	},
	openGraph: {
		title: "Free Mashable Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mashable Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/mashable-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mashable Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mashable Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mashable-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<MashableDownloader />
		</ToolLayout>
	);
}
