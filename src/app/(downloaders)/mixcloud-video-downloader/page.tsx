import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
	description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
	keywords: "mixcloud video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/mixcloud-video-downloader",
	},
	openGraph: {
		title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mixcloud-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mixcloud Video Downloader Online – Fast & No Signup | 30tools",
		description: "The easiest way to download Mixcloud audio and video content online. Our free tool helps you save high-quality mixes and tracks for offline listening anywhere. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mixcloud-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
