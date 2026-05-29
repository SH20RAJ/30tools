import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Comment Picker Online - No Signup | 30tools",
	description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience...",
	keywords: "youtube comment picker, free online tool, no signup, youtube-comment-picker, free youtube-comment-picker, Youtube Comment Picker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-comment-picker",
	},
	openGraph: {
		title: "Free YouTube Comment Picker Online - No Signup | 30tools",
		description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience...",
		url: "https://30tools.com/youtube-comment-picker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Comment Picker Online - No Signup | 30tools",
		description: "Pick a random winner from your YouTube video comments instantly. Our free online Comment Picker is perfect for giveaways, contests, and audience...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-comment-picker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
