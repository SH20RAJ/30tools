import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Region Restriction Checker Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Region Restriction Checker online. Fast, secure browser-based utility with no registration.",
	keywords: "youtube region restriction checker, free online tool, no signup, youtube-region-restriction-checker, free youtube-region-restriction-checker, Youtube Region Restriction Checker online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-region-restriction-checker",
	},
	openGraph: {
		title: "Free YouTube Region Restriction Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Region Restriction Checker online. Fast, secure browser-based utility with no registration.",
		url: "https://30tools.com/youtube-region-restriction-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Region Restriction Checker Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Region Restriction Checker online. Fast, secure browser-based utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-region-restriction-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
