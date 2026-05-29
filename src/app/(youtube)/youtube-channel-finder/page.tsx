import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Finder Online - No Signup | 30tools",
	description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for...",
	keywords: "youtube channel finder, free online tool, no signup, youtube-channel-finder, free youtube-channel-finder, Youtube Channel Finder online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-finder",
	},
	openGraph: {
		title: "Free YouTube Channel Finder Online - No Signup | 30tools",
		description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for...",
		url: "https://30tools.com/youtube-channel-finder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Finder Online - No Signup | 30tools",
		description: "Discover YouTube channels by keyword, category, or topic instantly. Our free online Channel Finder helps you research competitors and find inspiration for...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-finder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
