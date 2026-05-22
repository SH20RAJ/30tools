import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import StreamableDownloader from "@/components/tools/downloaders/StreamableDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Streamable Video Downloader Online - No Signup, Fast Download | 30tools",
	description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
	keywords: "streamable video downloader, free online tool, no signup, streamable-video-downloader, free streamable-video-downloader, Streamable Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/streamable-video-downloader",
	},
	openGraph: {
		title: "Free Streamable Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/streamable-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Streamable Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Download Streamable videos in high definition instantly. Our free online tool helps you save viral clips and sports highlights for offline viewing without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/streamable-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<StreamableDownloader />
		</ToolLayout>
	);
}
