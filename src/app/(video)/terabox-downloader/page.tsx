import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { SimpleTeraboxPlayer } from "@/components/tools/video/SimpleTeraboxPlayer";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Terabox Video Downloader Online - No Signup | 30tools",
	description: "Download, convert, and edit video files instantly with our free Terabox Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
	keywords: "terabox video downloader, free online tool, no signup, terabox-downloader, Terabox Downloader, free terabox-downloader, Terabox Downloader online, video tool, video editor, media converter, online video, 30tools",
	alternates: {
		canonical: "https://30tools.com/terabox-downloader",
	},
	openGraph: {
		title: "Free Terabox Video Downloader Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Terabox Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
		url: "https://30tools.com/terabox-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terabox Video Downloader Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Terabox Video Downloader online. Fast, secure, and private processing with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/terabox-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SimpleTeraboxPlayer />
		</ToolLayout>
	);
}
