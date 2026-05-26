import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Statistics Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Channel Statistics online. Fast, secure browser-based utility with no registration. Free & secure.",
	keywords: "youtube channel statistics, youtube analytics, youtube stats checker, channel analysis, free tool, 30tools, youtube-channel-statistics, free youtube-channel-statistics, youtube channel statistics online, youtube tool, video downloader, online youtube utility",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-statistics",
	},
	openGraph: {
		title: "Free YouTube Channel Statistics Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Channel Statistics online. Fast, secure browser-based utility with no registration. Free & secure.",
		url: "https://30tools.com/youtube-channel-statistics",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Statistics Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Channel Statistics online. Fast, secure browser-based utility with no registration. Free & secure.",
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
