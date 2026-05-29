import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Timestamp Link Generator Online - No Signup | 30tools",
	description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your...",
	keywords: "youtube timestamp link generator, free online tool, no signup, youtube-timestamp-link-generator, free youtube-timestamp-link-generator, Youtube Timestamp Link Generator online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-timestamp-link-generator",
	},
	openGraph: {
		title: "Free YouTube Timestamp Link Generator Online - No Signup | 30tools",
		description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your...",
		url: "https://30tools.com/youtube-timestamp-link-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Timestamp Link Generator Online - No Signup | 30tools",
		description: "Create direct links to specific parts of any YouTube video instantly. Our free online tool helps you share precise moments with friends, students, or your...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-timestamp-link-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
