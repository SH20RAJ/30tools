import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Description Generator Online - No Signup | 30tools",
	description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video...",
	keywords: "youtube description generator, free online tool, no signup, youtube-description-generator, free youtube-description-generator, Youtube Description Generator online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-description-generator",
	},
	openGraph: {
		title: "Free YouTube Description Generator Online - No Signup | 30tools",
		description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video...",
		url: "https://30tools.com/youtube-description-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Description Generator Online - No Signup | 30tools",
		description: "Create SEO-optimized YouTube video descriptions instantly. Our free online generator helps you include keywords, links, and timestamps to boost your video...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-description-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
