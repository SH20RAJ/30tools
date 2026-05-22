import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LinkedinDownloader from "@/components/tools/downloaders/LinkedinDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
	keywords: "linkedin video downloader, download linkedin videos, linkedin video saver, linkedin to mp4, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/linkedin-video-downloader",
	},
	openGraph: {
		title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
		url: "https://30tools.com/linkedin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Linkedin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download LinkedIn videos in high quality—free and easy. Our LinkedIn Video Downloader works with any public post link. Just copy the LinkedIn video URL, paste it, and download in seconds. No signup, no clutter, and no confusing steps—just fast processing and a clean, simple interface that helps you save videos quickly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/linkedin-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LinkedinDownloader />
		</ToolLayout>
	);
}
