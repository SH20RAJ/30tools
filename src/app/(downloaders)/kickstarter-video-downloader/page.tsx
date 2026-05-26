import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KickstarterDownloader from "@/components/tools/downloaders/KickstarterDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Kickstarter Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Kickstarter Video Downloader online. High-speed downloading with no signup needed.",
	keywords: "kickstarter video downloader, free online tool, no signup, kickstarter-video-downloader, free kickstarter-video-downloader, Kickstarter Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/kickstarter-video-downloader",
	},
	openGraph: {
		title: "Free Kickstarter Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Kickstarter Video Downloader online. High-speed downloading with no signup needed.",
		url: "https://30tools.com/kickstarter-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kickstarter Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Kickstarter Video Downloader online. High-speed downloading with no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/kickstarter-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KickstarterDownloader />
		</ToolLayout>
	);
}
