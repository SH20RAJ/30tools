import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TelegramDownloader from "@/components/tools/downloaders/TelegramDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Telegram Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Telegram Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "telegram video downloader, free online tool, no signup, telegram-video-downloader, free telegram-video-downloader, Telegram Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/telegram-video-downloader",
	},
	openGraph: {
		title: "Free Telegram Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Telegram Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/telegram-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Telegram Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Telegram Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
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
			<TelegramDownloader />
		</ToolLayout>
	);
}
