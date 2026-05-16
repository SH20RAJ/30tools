import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
	keywords: "mxtakatak video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/mxtakatak-video-downloader",
	},
	openGraph: {
		title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mxtakatak-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MxTakatak Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mxtakatak-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
