import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImgurDownloader from "@/components/tools/downloaders/ImgurDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Imgur Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Imgur Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "imgur video downloader, free online tool, no signup, imgur-video-downloader, free imgur-video-downloader, Imgur Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/imgur-video-downloader",
	},
	openGraph: {
		title: "Free Imgur Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Imgur Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/imgur-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imgur Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Imgur Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/imgur-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImgurDownloader />
		</ToolLayout>
	);
}
