import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokMP3Converter from "@/components/tools/downloaders/TikTokMP3Converter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Shrink Mp3 Size online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "shrink mp3 size, free online tool, no signup, shrink-mp3-size, free shrink-mp3-size, Shrink Mp3 Size online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/shrink-mp3-size",
	},
	openGraph: {
		title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Shrink Mp3 Size online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/shrink-mp3-size",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Shrink Mp3 Size Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Shrink Mp3 Size online. High-speed downloading with no signup needed. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/shrink-mp3-size");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokMP3Converter />
		</ToolLayout>
	);
}
