import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
	keywords: "flickr video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/flickr-video-downloader",
	},
	openGraph: {
		title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
		url: "https://30tools.com/flickr-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Flickr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Flickr videos to your device in high quality instantly. Our free online downloader is perfect for archiving and offline viewing of beautiful photography and videography. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/flickr-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
