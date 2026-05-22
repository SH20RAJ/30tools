import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import MxTakaTakDownloader from "@/components/tools/downloaders/MxTakaTakDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free MxTakatak Video Downloader Online - No Signup, Fast Download | 30tools",
	description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
	keywords: "mxtakatak video downloader, free online tool, no signup, mxtakatak-video-downloader, free mxtakatak-video-downloader, Mxtakatak Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mxtakatak-video-downloader",
	},
	openGraph: {
		title: "Free MxTakatak Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Save your favorite MxTakatak videos without watermark instantly. Our free online tool helps you download viral clips and funny videos from Takatak in high quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mxtakatak-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free MxTakatak Video Downloader Online - No Signup, Fast Download | 30tools",
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
			<MxTakaTakDownloader />
		</ToolLayout>
	);
}
