import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
	description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your...",
	keywords: "youtube video title capitalizer, free online tool, no signup, youtube-title-capitalizer, Youtube Title Capitalizer, free youtube-title-capitalizer, Youtube Title Capitalizer online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-capitalizer",
	},
	openGraph: {
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your...",
		url: "https://30tools.com/youtube-title-capitalizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
		description: "Automatically capitalize your YouTube video titles for maximum professional impact and CTR. Our free online tool follows industry standards to make your...",
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
