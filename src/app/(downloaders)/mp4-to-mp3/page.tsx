import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokMP3Converter from "@/components/tools/downloaders/TikTokMP3Converter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Mp4 To Mp3 online. High-speed downloading with no signup needed. 100% free and easy to use.",
	keywords: "mp4 to mp3, free online tool, no signup, mp4-to-mp3, free mp4-to-mp3, Mp4 To Mp3 online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/mp4-to-mp3",
	},
	openGraph: {
		title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mp4 To Mp3 online. High-speed downloading with no signup needed. 100% free and easy to use.",
		url: "https://30tools.com/mp4-to-mp3",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Mp4 To Mp3 Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Mp4 To Mp3 online. High-speed downloading with no signup needed. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mp4-to-mp3");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokMP3Converter />
		</ToolLayout>
	);
}
