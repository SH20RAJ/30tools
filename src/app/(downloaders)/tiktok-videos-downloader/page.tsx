import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
	description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
	keywords: "tiktok videos downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/tiktok-videos-downloader",
	},
	openGraph: {
		title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tiktok-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tiktok Videos Downloader Online – Fast & No Signup | 30tools",
		description: "Download TikTok videos without watermark—free, fast, and in HD MP4 with clear sound. Paste your link, hit download, and save clean, high-quality clips. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tiktok-videos-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
