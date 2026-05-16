import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
	description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
	keywords: "ig reels downloader hd, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/ig-reels-downloader-hd",
	},
	openGraph: {
		title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ig-reels-downloader-hd",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ig Reels Downloader Hd Online – Fast & No Signup | 30tools",
		description: "Download Instagram Reels in high-definition quality instantly. Our free online downloader is optimized for speed and works on all devices. Save your favorite Reels with one click. 100% free, fast, and no signup required.",
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
			<DownloaderEngine />
		</ToolLayout>
	);
}
