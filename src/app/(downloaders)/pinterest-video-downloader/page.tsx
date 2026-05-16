import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
	keywords: "pinterest video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/pinterest-video-downloader",
	},
	openGraph: {
		title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest videos in HD fast and free. Convert pins to MP4 or GIF—on mobile or desktop. Save favorites in 720p/1080p, and 4K when available. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
