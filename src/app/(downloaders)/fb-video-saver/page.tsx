import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookDownloader from "@/components/tools/downloaders/FacebookDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Fb Video Saver Online - No Signup, Fast Download | 30tools",
	description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
	keywords: "fb video saver, facebook video saver, save facebook videos, fb video downloader, free tool, 30tools, fb-video-saver, free fb-video-saver, fb video saver online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/fb-video-saver",
	},
	openGraph: {
		title: "Free Fb Video Saver Online - No Signup, Fast Download | 30tools",
		description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
		url: "https://30tools.com/fb-video-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Fb Video Saver Online - No Signup, Fast Download | 30tools",
		description: "Save Facebook videos and stories directly to your device. Our free online saver allows you to download public content in high definition without needing an account. 100% free, fast, and no signup required.",
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
