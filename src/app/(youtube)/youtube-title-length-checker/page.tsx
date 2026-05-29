import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
	description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full...",
	keywords: "youtube title length checker, free online tool, no signup, youtube-title-length-checker, free youtube-title-length-checker, Youtube Title Length Checker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-length-checker",
	},
	openGraph: {
		title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
		description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full...",
		url: "https://30tools.com/youtube-title-length-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
		description: "Check if your YouTube video title is the optimal length for search and browse. Our free online checker helps you avoid truncation and ensure your full...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-length-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
