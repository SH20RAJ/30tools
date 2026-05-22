import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BilibiliDownloader from "@/components/tools/downloaders/BilibiliDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Bilibili Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Bilibili videos online with ease. 100% free, fast, and no signup required.",
	keywords: "bilibili video downloader, free online tool, no signup, bilibili-video-downloader, free bilibili-video-downloader, Bilibili Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/bilibili-video-downloader",
	},
	openGraph: {
		title: "Free Bilibili Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Bilibili videos online with ease. 100% free, fast, and no signup required.",
		url: "https://30tools.com/bilibili-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bilibili Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Bilibili videos online with ease. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/bilibili-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BilibiliDownloader />
		</ToolLayout>
	);
}
