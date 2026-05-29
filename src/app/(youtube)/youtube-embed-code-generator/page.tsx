import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Embed Code Generator Online - No Signup | 30tools",
	description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls...",
	keywords: "youtube embed code generator, free online tool, no signup, youtube-embed-code-generator, free youtube-embed-code-generator, Youtube Embed Code Generator online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-embed-code-generator",
	},
	openGraph: {
		title: "Free YouTube Embed Code Generator Online - No Signup | 30tools",
		description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls...",
		url: "https://30tools.com/youtube-embed-code-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Embed Code Generator Online - No Signup | 30tools",
		description: "Generate customizable YouTube embed codes instantly. Our free online tool helps you create responsive iframes with specific start times, player controls...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-embed-code-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
