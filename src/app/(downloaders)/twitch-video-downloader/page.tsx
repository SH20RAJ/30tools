import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TwitchDownloader from "@/components/tools/downloaders/TwitchDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Twitch Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Twitch videos and clips easily. 100% free, fast, and no signup required.",
	keywords: "twitch video downloader, download twitch clips, twitch vod downloader, twitch to mp4, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/twitch-video-downloader",
	},
	openGraph: {
		title: "Free Twitch Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Twitch videos and clips easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/twitch-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Twitch Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Twitch videos and clips easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/twitch-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TwitchDownloader />
		</ToolLayout>
	);
}
