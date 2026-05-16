import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
	keywords: "likee video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/likee-video-downloader",
	},
	openGraph: {
		title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		url: "https://30tools.com/likee-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Likee Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Likee videos without watermark easily. Our free online downloader preserves high video quality and works instantly in your browser on all devices. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/likee-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
