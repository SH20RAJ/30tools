import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Online Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks. 100% free, fast, and no signup required.",
	keywords: "online video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/online-video-downloader",
	},
	openGraph: {
		title: "Free Online Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/online-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Online Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from any website for free with our online video downloader. Supports YouTube, TikTok, Instagram, Facebook, Twitter and 1000+ sites. HD quality, MP4/MP3 formats, no watermarks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/online-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
