import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
	description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
	keywords: "insta reels saver, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/insta-reels-saver",
	},
	openGraph: {
		title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
		description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
		url: "https://30tools.com/insta-reels-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Insta Reels Saver Online – Fast & No Signup | 30tools",
		description: "Save Instagram Reels with original audio in HD quality. Our free online downloader works instantly on mobile and desktop without any app installation. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/insta-reels-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
