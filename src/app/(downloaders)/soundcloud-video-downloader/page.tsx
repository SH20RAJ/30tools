import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SoundcloudDownloader from "@/components/tools/downloaders/SoundcloudDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Soundcloud Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Soundcloud Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "soundcloud video downloader, free online tool, no signup, soundcloud-video-downloader, free soundcloud-video-downloader, Soundcloud Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/soundcloud-video-downloader",
	},
	openGraph: {
		title: "Free Soundcloud Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Soundcloud Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/soundcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Soundcloud Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Soundcloud Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/soundcloud-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SoundcloudDownloader />
		</ToolLayout>
	);
}
