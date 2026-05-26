import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookStoryDownloader from "@/components/tools/downloaders/FacebookStoryDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Facebook Story Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Facebook Story Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "facebook story downloader, save facebook stories, fb story saver, facebook story saver, free tool, 30tools, facebook-story-downloader, free facebook-story-downloader, facebook story downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/facebook-story-downloader",
	},
	openGraph: {
		title: "Free Facebook Story Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Facebook Story Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/facebook-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Story Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Facebook Story Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/facebook-story-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookStoryDownloader />
		</ToolLayout>
	);
}
