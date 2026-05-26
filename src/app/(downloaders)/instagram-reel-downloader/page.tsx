import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Instagram Reel Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "instagram reel downloader, download reels, instagram reels saver, reel video downloader, free tool, 30tools, instagram-reel-downloader, free instagram-reel-downloader, instagram reel downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/instagram-reel-downloader",
	},
	openGraph: {
		title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Reel Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/instagram-reel-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Reel Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Reel Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/instagram-reel-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramReelDownloader />
		</ToolLayout>
	);
}
