import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokAudioDownloader from "@/components/tools/downloaders/TikTokAudioDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mp3 From Tiktok Online - No Signup, Fast Download | 30tools",
	description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
	keywords: "mp3 from tiktok, free online tool, no signup, mp3-from-tiktok, free mp3-from-tiktok, Mp3 From Tiktok online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp3-from-tiktok",
	},
	openGraph: {
		title: "Free Mp3 From Tiktok Online - No Signup, Fast Download | 30tools",
		description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
		url: "https://30tools.com/mp3-from-tiktok",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp3 From Tiktok Online - No Signup, Fast Download | 30tools",
		description: "Extract high-quality MP3 audio from any TikTok video instantly. Perfect for saving viral sounds, music, and voiceovers for offline listening or creative projects. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mp3-from-tiktok");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokAudioDownloader />
		</ToolLayout>
	);
}
