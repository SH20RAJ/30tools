import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookDownloader from "@/components/tools/downloaders/FacebookDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Fb Video Saver Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Fb Video Saver online. High-speed downloading with no signup needed. No registration needed.",
	keywords: "fb video saver, facebook video saver, save facebook videos, fb video downloader, free tool, 30tools, fb-video-saver, free fb-video-saver, fb video saver online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/fb-video-saver",
	},
	openGraph: {
		title: "Free Fb Video Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Fb Video Saver online. High-speed downloading with no signup needed. No registration needed.",
		url: "https://30tools.com/fb-video-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fb Video Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Fb Video Saver online. High-speed downloading with no signup needed. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/fb-video-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookDownloader />
		</ToolLayout>
	);
}
