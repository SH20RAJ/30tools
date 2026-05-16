import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
	description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "telegram video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/telegram-video-downloader",
	},
	openGraph: {
		title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/telegram-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Telegram Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos and media from Telegram channels and groups. Save high-quality content for offline viewing instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/telegram-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
