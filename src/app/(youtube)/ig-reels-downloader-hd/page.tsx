import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
	description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your...",
	keywords: "ig reels downloader hd, free online tool, no signup, ig-reels-downloader-hd, free ig-reels-downloader-hd, Ig Reels Downloader Hd online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/ig-reels-downloader-hd",
	},
	openGraph: {
		title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your...",
		url: "https://30tools.com/ig-reels-downloader-hd",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ig-reels-downloader-hd");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramReelDownloader />
		</ToolLayout>
	);
}
