import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
	description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
	keywords: "m3u8 downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/m3u8-downloader",
	},
	openGraph: {
		title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
		description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
		url: "https://30tools.com/m3u8-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free M3U8 Downloader Online – Fast & No Signup | 30tools",
		description: "Download m3u8 playlists and convert them to high-quality MP4 videos. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/m3u8-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
