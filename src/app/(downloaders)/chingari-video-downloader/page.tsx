import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
	keywords: "chingari video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/chingari-video-downloader",
	},
	openGraph: {
		title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/chingari-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Chingari Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Chingari videos to your device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/chingari-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
