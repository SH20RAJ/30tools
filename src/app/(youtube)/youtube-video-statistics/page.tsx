import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video Statistics Online - No Signup | 30tools",
	description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool.",
	keywords: "youtube video statistics, free online tool, no signup, youtube-video-statistics, free youtube-video-statistics, Youtube Video Statistics online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-statistics",
	},
	openGraph: {
		title: "Free YouTube Video Statistics Online - No Signup | 30tools",
		description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool.",
		url: "https://30tools.com/youtube-video-statistics",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Statistics Online - No Signup | 30tools",
		description: "Get detailed metrics and statistics for any YouTube video instantly. Analyze view counts, likes, and engagement rates with our free online video audit tool.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-video-statistics");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
