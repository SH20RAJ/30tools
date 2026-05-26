import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PeriscopeDownloader from "@/components/tools/downloaders/PeriscopeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Periscope Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Periscope Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "periscope video downloader, free online tool, no signup, periscope-video-downloader, free periscope-video-downloader, Periscope Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/periscope-video-downloader",
	},
	openGraph: {
		title: "Free Periscope Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Periscope Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/periscope-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Periscope Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Periscope Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/periscope-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PeriscopeDownloader />
		</ToolLayout>
	);
}
