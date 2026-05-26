import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Generator Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Title Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "youtube title generator, video title ideas, youtube seo titles, clickable titles, free tool, 30tools, youtube-title-generator, free youtube-title-generator, youtube title generator online, youtube tool, video downloader, online youtube utility",
	alternates: {
		canonical: "https://30tools.com/youtube-title-generator",
	},
	openGraph: {
		title: "Free YouTube Title Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/youtube-title-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Generator Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Generator online. Fast, secure browser-based utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
