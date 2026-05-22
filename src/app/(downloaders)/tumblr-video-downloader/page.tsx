import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TumblrVideoDownloader from "@/components/tools/downloaders/TumblrVideoDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
	keywords: "tumblr video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/tumblr-video-downloader",
	},
	openGraph: {
		title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/tumblr-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tumblr Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Tumblr videos online with our free tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tumblr-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TumblrVideoDownloader />
		</ToolLayout>
	);
}
