import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramStoryDownloader from "@/components/tools/downloaders/InstagramStoryDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Story Downloader Online - No Signup, Fast Download | 30tools",
	description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
	keywords: "instagram story downloader, download instagram stories, story saver, ig story downloader, free tool, 30tools, instagram-story-downloader, free instagram-story-downloader, instagram story downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/instagram-story-downloader",
	},
	openGraph: {
		title: "Free Instagram Story Downloader Online - No Signup, Fast Download | 30tools",
		description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Story Downloader Online - No Signup, Fast Download | 30tools",
		description: "Download Instagram Story online for free. The ultimate tool for downloading videos and media from Instagram directly to your device. Fast, secure, and no installation required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/instagram-story-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramStoryDownloader />
		</ToolLayout>
	);
}
