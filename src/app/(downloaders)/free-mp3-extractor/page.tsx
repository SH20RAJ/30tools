import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokAudioDownloader from "@/components/tools/downloaders/TikTokAudioDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Free Mp3 Extractor Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Free Mp3 Extractor online. High-speed downloading with no signup needed. No signup required.",
	keywords: "free mp3 extractor, free online tool, no signup, free-mp3-extractor, free free-mp3-extractor, Free Mp3 Extractor online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/free-mp3-extractor",
	},
	openGraph: {
		title: "Free Free Mp3 Extractor Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Free Mp3 Extractor online. High-speed downloading with no signup needed. No signup required.",
		url: "https://30tools.com/free-mp3-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Mp3 Extractor Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Free Mp3 Extractor online. High-speed downloading with no signup needed. No signup required.",
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
