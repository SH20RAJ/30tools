import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TedDownloader from "@/components/tools/downloaders/TedDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Ted Video Downloader Online - No Signup, Fast Download | 30tools",
	description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
	keywords: "ted video downloader, free online tool, no signup, ted-video-downloader, free ted-video-downloader, Ted Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/ted-video-downloader",
	},
	openGraph: {
		title: "Free Ted Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ted-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ted Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Save TED Talk videos directly to your device easily. Our free online downloader helps you keep inspirational talks and educational content for offline viewing in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ted-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TedDownloader />
		</ToolLayout>
	);
}
