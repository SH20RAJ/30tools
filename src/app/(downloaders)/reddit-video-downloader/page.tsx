import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Reddit Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Reddit Videos & GIFs in HD Free. 100% free, fast, and no signup required.",
	keywords: "reddit video downloader, download reddit videos, reddit video saver, reddit to mp4, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-video-downloader",
	},
	openGraph: {
		title: "Free Reddit Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Reddit Videos & GIFs in HD Free. 100% free, fast, and no signup required.",
		url: "https://30tools.com/reddit-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Reddit Videos & GIFs in HD Free. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/reddit-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
