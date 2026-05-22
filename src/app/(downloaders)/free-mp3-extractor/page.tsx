import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokAudioDownloader from "@/components/tools/downloaders/TikTokAudioDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
	description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
	keywords: "free mp3 extractor, free online tool, no signup, free-mp3-extractor, free free-mp3-extractor, Free Mp3 Extractor online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/free-mp3-extractor",
	},
	openGraph: {
		title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
		description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
		url: "https://30tools.com/free-mp3-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Mp3 Extractor Online – Fast & No Signup | 30tools",
		description: "Extract MP3 audio from any video file instantly. Our free online tool supports multiple video formats and provides high-bitrate audio downloads for a premium listening experience. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/free-mp3-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokAudioDownloader />
		</ToolLayout>
	);
}
