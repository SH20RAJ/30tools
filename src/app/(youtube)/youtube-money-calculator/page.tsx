import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
	description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
	keywords: "youtube money calculator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-money-calculator",
	},
	openGraph: {
		title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
		description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-money-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Money Calculator Online – Fast & No Signup | 30tools",
		description: "Estimate potential earnings for any YouTube video or channel with our free online Money Calculator. Understand revenue based on views, CPM, and engagement metrics. Perfect for creators. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-money-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
