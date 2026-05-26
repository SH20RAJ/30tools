import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Hashtag Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Hashtag Generator online. Fast, secure browser-based utility with no registration. Free & secure.",
	keywords: "youtube hashtag generator, free online tool, no signup, youtube-hashtag-generator, free youtube-hashtag-generator, Youtube Hashtag Generator online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-hashtag-generator",
	},
	openGraph: {
		title: "Free YouTube Hashtag Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Hashtag Generator online. Fast, secure browser-based utility with no registration. Free & secure.",
		url: "https://30tools.com/youtube-hashtag-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Hashtag Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Hashtag Generator online. Fast, secure browser-based utility with no registration. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-hashtag-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
