import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
	description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
	keywords: "instagram reel downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/instagram-reel-downloader",
	},
	openGraph: {
		title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/instagram-reel-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Reel Downloader Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels without watermark in HD 1080p quality with original audio. Fast, free, and no login required. Save IG Reels to your gallery instantly. 100% free, fast, and no signup required.",
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
			<DownloaderEngine />
		</ToolLayout>
	);
}
