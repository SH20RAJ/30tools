import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Video Count Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
	keywords: "youtube video count checker, free online tool, no signup, youtube-video-count-checker, free youtube-video-count-checker, Youtube Video Count Checker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-video-count-checker",
	},
	openGraph: {
		title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Video Count Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
		url: "https://30tools.com/youtube-video-count-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Video Count Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
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
