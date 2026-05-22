import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Twitter Videos Online - No Signup, Fast Download | 30tools",
	description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
	keywords: "save twitter videos, free online tool, no signup, save-twitter-videos, free save-twitter-videos, Save Twitter Videos online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-twitter-videos",
	},
	openGraph: {
		title: "Free Save Twitter Videos Online - No Signup, Fast Download | 30tools",
		description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-twitter-videos",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Twitter Videos Online - No Signup, Fast Download | 30tools",
		description: "Download videos and GIFs from Twitter (X) in high resolution. Our free online tool preserves quality and provides multiple format options for offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-twitter-videos");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TwitterDownloader />
		</ToolLayout>
	);
}
