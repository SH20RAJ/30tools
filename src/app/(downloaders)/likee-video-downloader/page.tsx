import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LikeeDownloader from "@/components/tools/downloaders/LikeeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Likee Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Likee Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
	keywords: "likee video downloader, free online tool, no signup, likee-video-downloader, free likee-video-downloader, Likee Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/likee-video-downloader",
	},
	openGraph: {
		title: "Free Likee Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Likee Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		url: "https://30tools.com/likee-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Likee Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Likee Video Downloader online. High-speed downloading with no signup needed. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/likee-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LikeeDownloader />
		</ToolLayout>
	);
}
