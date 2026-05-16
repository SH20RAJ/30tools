import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
	keywords: "threads video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/threads-video-downloader",
	},
	openGraph: {
		title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/threads-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Threads Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Threads videos and clips to your device easily. Our free online tool preserves original video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/threads-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
