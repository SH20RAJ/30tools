import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
	description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
	keywords: "youtube channel banner downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-banner-downloader",
	},
	openGraph: {
		title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-banner-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel Banner Downloader Online – Fast & No Signup | 30tools",
		description: "Download high-resolution YouTube channel banners and covers instantly. Our free tool helps you save channel branding for design reference or archiving. High-quality and easy to use. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-banner-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
