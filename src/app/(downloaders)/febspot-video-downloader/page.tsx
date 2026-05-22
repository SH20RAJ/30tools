import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FebspotDownloader from "@/components/tools/downloaders/FebspotDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "febspot video downloader, free online tool, no signup, febspot-video-downloader, free febspot-video-downloader, Febspot Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/febspot-video-downloader",
	},
	openGraph: {
		title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/febspot-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Febspot Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Febspot videos in high resolution instantly. Our free online tool helps you save your favorite content for offline viewing without any signup. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/febspot-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FebspotDownloader />
		</ToolLayout>
	);
}
