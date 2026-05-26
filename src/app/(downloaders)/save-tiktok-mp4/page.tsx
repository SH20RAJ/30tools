import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Tiktok Mp4 online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "save tiktok mp4, free online tool, no signup, save-tiktok-mp4, free save-tiktok-mp4, Save Tiktok Mp4 online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-tiktok-mp4",
	},
	openGraph: {
		title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Tiktok Mp4 online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/save-tiktok-mp4",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Tiktok Mp4 Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Tiktok Mp4 online. High-speed downloading with no signup needed. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-tiktok-mp4");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokDownloader />
		</ToolLayout>
	);
}
