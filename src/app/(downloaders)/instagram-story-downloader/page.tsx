import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramStoryDownloader from "@/components/tools/downloaders/InstagramStoryDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Story Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Instagram Story Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "instagram story downloader, download instagram stories, story saver, ig story downloader, free tool, 30tools, instagram-story-downloader, free instagram-story-downloader, instagram story downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/instagram-story-downloader",
	},
	openGraph: {
		title: "Free Instagram Story Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Story Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/instagram-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Story Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Story Downloader online. High-speed downloading with no signup needed. 100% free.",
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
