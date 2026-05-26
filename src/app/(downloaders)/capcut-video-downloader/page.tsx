import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CapcutDownloader from "@/components/tools/downloaders/CapcutDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Capcut Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Capcut Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "capcut video downloader, free online tool, no signup, capcut-video-downloader, free capcut-video-downloader, Capcut Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/capcut-video-downloader",
	},
	openGraph: {
		title: "Free Capcut Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Capcut Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/capcut-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Capcut Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Capcut Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/capcut-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CapcutDownloader />
		</ToolLayout>
	);
}
