import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
	description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
	keywords: "youtube channel age checker, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-age-checker",
	},
	openGraph: {
		title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-age-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Age Checker Online – Fast & No Signup | 30tools",
		description: "Find the exact creation date of any YouTube channel with our free online Age Checker. Perfect for creator research, account verification, and competitive analysis. Fast and private. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-age-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
