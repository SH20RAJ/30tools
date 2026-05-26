import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TikTokMP3Converter from "@/components/tools/downloaders/TikTokMP3Converter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Modify Mp3 File Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Modify Mp3 File online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "modify mp3 file, free online tool, no signup, modify-mp3-file, free modify-mp3-file, Modify Mp3 File online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/modify-mp3-file",
	},
	openGraph: {
		title: "Free Modify Mp3 File Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Modify Mp3 File online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/modify-mp3-file",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Modify Mp3 File Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Modify Mp3 File online. High-speed downloading with no signup needed. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/modify-mp3-file");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TikTokMP3Converter />
		</ToolLayout>
	);
}
