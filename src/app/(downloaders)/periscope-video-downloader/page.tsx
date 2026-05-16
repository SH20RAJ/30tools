import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
	keywords: "periscope video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/periscope-video-downloader",
	},
	openGraph: {
		title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
		url: "https://30tools.com/periscope-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Periscope Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Periscope videos and live stream replays easily. Our free online tool helps you save historical broadcast content for offline viewing before it disappears. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/periscope-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
