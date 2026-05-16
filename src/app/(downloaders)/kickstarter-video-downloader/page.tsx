import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
	keywords: "kickstarter video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/kickstarter-video-downloader",
	},
	openGraph: {
		title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/kickstarter-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kickstarter Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save Kickstarter project videos and pitch clips to your device easily. Our free online downloader helps you keep campaign media for reference and offline viewing. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/kickstarter-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
