import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
	description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
	keywords: "soundcloud video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/soundcloud-video-downloader",
	},
	openGraph: {
		title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/soundcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Soundcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download SoundCloud audio and video content online for free. Save high-quality tracks and clips for offline listening in your browser without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/soundcloud-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
