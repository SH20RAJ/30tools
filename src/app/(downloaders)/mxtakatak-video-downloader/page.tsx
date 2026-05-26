import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import MxTakaTakDownloader from "@/components/tools/downloaders/MxTakaTakDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free MxTakatak Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free MxTakatak Video Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "mxtakatak video downloader, free online tool, no signup, mxtakatak-video-downloader, free mxtakatak-video-downloader, Mxtakatak Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mxtakatak-video-downloader",
	},
	openGraph: {
		title: "Free MxTakatak Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free MxTakatak Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/mxtakatak-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MxTakatak Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free MxTakatak Video Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mxtakatak-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<MxTakaTakDownloader />
		</ToolLayout>
	);
}
