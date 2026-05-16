import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
	description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
	keywords: "dailymotion video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/dailymotion-video-downloader",
	},
	openGraph: {
		title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
		description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
		url: "https://30tools.com/dailymotion-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Dailymotion Video Downloader Online – Fast & No Signup | 30tools",
		description: "Free online Dailymotion downloader to save videos as MP4 in HD. Fast, secure, no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/dailymotion-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
