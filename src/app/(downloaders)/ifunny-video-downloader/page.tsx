import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import IfunnyDownloader from "@/components/tools/downloaders/IfunnyDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Ifunny Video Downloader Online - No Signup, Fast Download | 30tools",
	description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "ifunny video downloader, free online tool, no signup, ifunny-video-downloader, free ifunny-video-downloader, Ifunny Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/ifunny-video-downloader",
	},
	openGraph: {
		title: "Free Ifunny Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ifunny-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ifunny Video Downloader Online - No Signup, Fast Download | 30tools",
		description: "Save your favorite iFunny videos and memes to your device easily. Our free online downloader preserves quality and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ifunny-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<IfunnyDownloader />
		</ToolLayout>
	);
}
