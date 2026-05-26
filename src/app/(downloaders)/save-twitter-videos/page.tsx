import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TwitterDownloader from "@/components/tools/downloaders/TwitterDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Twitter Videos Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Twitter Videos online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "save twitter videos, free online tool, no signup, save-twitter-videos, free save-twitter-videos, Save Twitter Videos online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-twitter-videos",
	},
	openGraph: {
		title: "Free Save Twitter Videos Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Twitter Videos online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/save-twitter-videos",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Twitter Videos Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Twitter Videos online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-twitter-videos");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TwitterDownloader />
		</ToolLayout>
	);
}
