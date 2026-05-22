import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
	description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
	keywords: "youtube channel statistics, youtube analytics, youtube stats checker, channel analysis, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-statistics",
	},
	openGraph: {
		title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-statistics",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Statistics Online – Fast & No Signup | 30tools",
		description: "Get detailed insights and statistics for any YouTube channel instantly. View subscriber counts, video totals, and engagement metrics with our free online analytics tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-statistics");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
