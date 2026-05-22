import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
	keywords: "facebook video downloader, download fb videos, facebook reels downloader, free video downloader, 30tools",
	alternates: {
		canonical: "https://30tools.com/facebook-video-downloader",
	},
	openGraph: {
		title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
		url: "https://30tools.com/facebook-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook videos, reels, and stories in HD quality without software installation 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/facebook-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
