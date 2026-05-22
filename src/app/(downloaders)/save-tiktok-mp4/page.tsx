import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokDownloader from "@/components/tools/downloaders/TikTokDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
	description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
	keywords: "save tiktok mp4, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-tiktok-mp4",
	},
	openGraph: {
		title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
		description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-tiktok-mp4",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Tiktok Mp4 Online – Fast & No Signup | 30tools",
		description: "Save TikTok videos as high-quality MP4 files instantly. Our free online downloader is fast, secure, and works on all devices without any signup or software. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-tiktok-mp4");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokDownloader />
		</ToolLayout>
	);
}
