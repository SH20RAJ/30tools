import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
	description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
	keywords: "youtube thumbnail downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-thumbnail-downloader",
	},
	openGraph: {
		title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
		url: "https://30tools.com/youtube-thumbnail-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Thumbnail Downloader Online – Fast & No Signup | 30tools",
		description: "Download YouTube video thumbnails in HD and maxresdefault quality for free. Save high-resolution thumbnails for design, analysis, and content creation. No signup required, instant downloads.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-thumbnail-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
