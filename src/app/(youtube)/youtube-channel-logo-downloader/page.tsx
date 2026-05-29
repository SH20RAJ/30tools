import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Logo Downloader Online - No Signup | 30tools",
	description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online...",
	keywords: "youtube channel logo downloader, free online tool, no signup, youtube-channel-logo-downloader, free youtube-channel-logo-downloader, Youtube Channel Logo Downloader online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-logo-downloader",
	},
	openGraph: {
		title: "Free YouTube Channel Logo Downloader Online - No Signup | 30tools",
		description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online...",
		url: "https://30tools.com/youtube-channel-logo-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Logo Downloader Online - No Signup | 30tools",
		description: "Download high-quality YouTube channel logos and profile pictures instantly. Perfect for brand audits and design research. Free, fast, and secure online...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-logo-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
