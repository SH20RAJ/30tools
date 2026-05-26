import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VideoConverterTool from "@/components/tools/video/VideoConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Video Converter Online - No Signup | 30tools",
	description: "Download, convert, and edit video files instantly with our free Video Converter online. Fast, secure, and private processing with no signup. No signup required.",
	keywords: "video converter, convert video, mp4 converter, video format converter, free video tool, 30tools, video-converter, free video-converter, video converter online, browser video tool, online video editor, free video utility",
	alternates: {
		canonical: "https://30tools.com/video-converter",
	},
	openGraph: {
		title: "Free Video Converter Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Video Converter online. Fast, secure, and private processing with no signup. No signup required.",
		url: "https://30tools.com/video-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Converter Online - No Signup | 30tools",
		description: "Download, convert, and edit video files instantly with our free Video Converter online. Fast, secure, and private processing with no signup. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/video-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<VideoConverterTool />
		</ToolLayout>
	);
}
