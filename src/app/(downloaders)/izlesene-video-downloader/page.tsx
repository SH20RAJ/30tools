import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
	keywords: "izlesene video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/izlesene-video-downloader",
	},
	openGraph: {
		title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/izlesene-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Izlesene Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download videos from Izlesene in high quality instantly. Our free online tool makes it easy to save your favorite Turkish videos and clips for offline viewing without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/izlesene-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
