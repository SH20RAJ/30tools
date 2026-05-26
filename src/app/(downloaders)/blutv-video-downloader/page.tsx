import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BlutvDownloader from "@/components/tools/downloaders/BlutvDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free BluTV Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free BluTV Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "blutv video downloader, free online tool, no signup, blutv-video-downloader, free blutv-video-downloader, Blutv Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/blutv-video-downloader",
	},
	openGraph: {
		title: "Free BluTV Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free BluTV Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/blutv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free BluTV Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free BluTV Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/blutv-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BlutvDownloader />
		</ToolLayout>
	);
}
