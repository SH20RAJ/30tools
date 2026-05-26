import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Reels Video Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Reels Video online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "save reels video, save instagram reels, instagram reels saver, reel video downloader, free tool, 30tools, save-reels-video, free save-reels-video, save reels video online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/save-reels-video",
	},
	openGraph: {
		title: "Free Save Reels Video Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Reels Video online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/save-reels-video",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Reels Video Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Reels Video online. High-speed downloading with no signup needed. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-reels-video");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramReelDownloader />
		</ToolLayout>
	);
}
