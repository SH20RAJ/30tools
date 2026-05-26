import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Tiktok Saver No Watermark Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Tiktok Saver No Watermark online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "tiktok saver no watermark, free online tool, no signup, tiktok-saver-no-watermark, free tiktok-saver-no-watermark, Tiktok Saver No Watermark online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/tiktok-saver-no-watermark",
	},
	openGraph: {
		title: "Free Tiktok Saver No Watermark Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tiktok Saver No Watermark online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/tiktok-saver-no-watermark",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tiktok Saver No Watermark Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Tiktok Saver No Watermark online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tiktok-saver-no-watermark");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokDownloader />
		</ToolLayout>
	);
}
