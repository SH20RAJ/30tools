import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LinkedinDownloader from "@/components/tools/downloaders/LinkedinDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Linkedin Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "linkedin video downloader, download linkedin videos, linkedin video saver, linkedin to mp4, free tool, 30tools, linkedin-video-downloader, free linkedin-video-downloader, linkedin video downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/linkedin-video-downloader",
	},
	openGraph: {
		title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Linkedin Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/linkedin-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Linkedin Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Linkedin Video Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/linkedin-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LinkedinDownloader />
		</ToolLayout>
	);
}
