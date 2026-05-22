import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DouyinDownloader from "@/components/tools/downloaders/DouyinDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
	keywords: "douyin video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/douyin-video-downloader",
	},
	openGraph: {
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/douyin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Douyin Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Douyin videos directly to your device easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/douyin-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DouyinDownloader />
		</ToolLayout>
	);
}
