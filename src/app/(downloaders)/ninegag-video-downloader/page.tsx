import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import NinegagDownloader from "@/components/tools/downloaders/NinegagDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "ninegag video downloader, free online tool, no signup, ninegag-video-downloader, free ninegag-video-downloader, Ninegag Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/ninegag-video-downloader",
	},
	openGraph: {
		title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ninegag-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free NineGag Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite 9GAG videos and memes to your device easily. Our free online downloader preserves original quality and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ninegag-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<NinegagDownloader />
		</ToolLayout>
	);
}
