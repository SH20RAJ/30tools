import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import OdnoklassnikiDownloader from "@/components/tools/downloaders/OdnoklassnikiDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Odnoklassniki Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Odnoklassniki Video Downloader online. High-speed downloading with no signup needed.",
	keywords: "odnoklassniki video downloader, free online tool, no signup, odnoklassniki-video-downloader, free odnoklassniki-video-downloader, Odnoklassniki Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/odnoklassniki-video-downloader",
	},
	openGraph: {
		title: "Free Odnoklassniki Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Odnoklassniki Video Downloader online. High-speed downloading with no signup needed.",
		url: "https://30tools.com/odnoklassniki-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Odnoklassniki Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Odnoklassniki Video Downloader online. High-speed downloading with no signup needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/odnoklassniki-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<OdnoklassnikiDownloader />
		</ToolLayout>
	);
}
