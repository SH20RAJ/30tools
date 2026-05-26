import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import AkillitvDownloader from "@/components/tools/downloaders/AkillitvDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free AkilliTv Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free AkilliTv Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "akillitv video downloader, free online tool, no signup, akillitv-video-downloader, free akillitv-video-downloader, Akillitv Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/akillitv-video-downloader",
	},
	openGraph: {
		title: "Free AkilliTv Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free AkilliTv Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/akillitv-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AkilliTv Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free AkilliTv Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/akillitv-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AkillitvDownloader />
		</ToolLayout>
	);
}
