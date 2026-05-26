import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import M3u8Downloader from "@/components/tools/downloaders/M3u8Downloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free M3U8 Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free M3U8 Downloader online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "m3u8 downloader, free online tool, no signup, m3u8-downloader, free m3u8-downloader, M3u8 Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/m3u8-downloader",
	},
	openGraph: {
		title: "Free M3U8 Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free M3U8 Downloader online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/m3u8-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free M3U8 Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free M3U8 Downloader online. High-speed downloading with no signup needed. 100% free and secure.",
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
			<M3u8Downloader />
		</ToolLayout>
	);
}
