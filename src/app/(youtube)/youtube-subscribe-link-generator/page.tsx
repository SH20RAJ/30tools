import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
	description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
	keywords: "youtube subscribe link generator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-subscribe-link-generator",
	},
	openGraph: {
		title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
		description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-subscribe-link-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Subscribe Link Generator Online – Fast & No Signup | 30tools",
		description: "Create a direct YouTube subscribe link for your channel instantly. Our free online tool helps you boost your subscriber count with one-click links for social media and bios. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-subscribe-link-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
