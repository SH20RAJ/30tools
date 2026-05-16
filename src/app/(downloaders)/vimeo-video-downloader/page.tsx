import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
	description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
	keywords: "vimeo video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/vimeo-video-downloader",
	},
	openGraph: {
		title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
		description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/vimeo-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Vimeo Video Downloader Online – Fast & No Signup | 30tools",
		description: "Paste a Vimeo URL and instantly download the video as an MP4 file for free on any device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/vimeo-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
