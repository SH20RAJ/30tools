import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Title Length Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
	keywords: "youtube title length checker, free online tool, no signup, youtube-title-length-checker, free youtube-title-length-checker, Youtube Title Length Checker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-length-checker",
	},
	openGraph: {
		title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Length Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
		url: "https://30tools.com/youtube-title-length-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Length Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Length Checker online. Fast, secure browser-based utility with no registration. Easy to use.",
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
