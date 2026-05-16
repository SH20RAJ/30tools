import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
	keywords: "universal video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/universal-video-downloader",
	},
	openGraph: {
		title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/universal-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Universal Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from TikTok, Facebook, Instagram, Twitter/X, Vimeo, Dailymotion, Reddit, Rumble and more. No watermark downloads, multiple quality options, no registration required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/universal-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
