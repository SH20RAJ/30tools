import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Youtube Video Title Capitalizer online. Fast, secure browser-based utility with no registration.",
	keywords: "youtube video title capitalizer, free online tool, no signup, youtube-title-capitalizer, Youtube Title Capitalizer, free youtube-title-capitalizer, Youtube Title Capitalizer online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-capitalizer",
	},
	openGraph: {
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Youtube Video Title Capitalizer online. Fast, secure browser-based utility with no registration.",
		url: "https://30tools.com/youtube-title-capitalizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Youtube Video Title Capitalizer online. Fast, secure browser-based utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-capitalizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
