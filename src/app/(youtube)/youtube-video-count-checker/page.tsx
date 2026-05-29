import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
	description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel...",
	keywords: "youtube video count checker, free online tool, no signup, youtube-video-count-checker, free youtube-video-count-checker, Youtube Video Count Checker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-count-checker",
	},
	openGraph: {
		title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
		description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel...",
		url: "https://30tools.com/youtube-video-count-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
		description: "Get the exact video count for any YouTube channel instantly. Our free online checker provides up-to-date information for competitive research and channel...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-video-count-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
