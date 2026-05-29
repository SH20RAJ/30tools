import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Views Ratio Calculator Online - No Signup | 30tools",
	description: "Calculate the view-to-engagement ratio for any YouTube video instantly. Our free online tool helps you understand audience interaction and video...",
	keywords: "youtube views ratio calculator, free online tool, no signup, youtube-views-ratio-calculator, free youtube-views-ratio-calculator, Youtube Views Ratio Calculator online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-views-ratio-calculator",
	},
	openGraph: {
		title: "Free YouTube Views Ratio Calculator Online - No Signup | 30tools",
		description: "Calculate the view-to-engagement ratio for any YouTube video instantly. Our free online tool helps you understand audience interaction and video...",
		url: "https://30tools.com/youtube-views-ratio-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Views Ratio Calculator Online - No Signup | 30tools",
		description: "Calculate the view-to-engagement ratio for any YouTube video instantly. Our free online tool helps you understand audience interaction and video...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-views-ratio-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
