import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
	description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
	keywords: "rumble video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/rumble-video-downloader",
	},
	openGraph: {
		title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/rumble-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rumble Video Downloader Online – Fast & No Signup | 30tools",
		description: "The ultimate tool for downloading videos from Rumble in HD quality. Our free online downloader is fast, secure, and works on all devices without any signup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/rumble-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
