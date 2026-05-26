import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SnapchatDownloader from "@/components/tools/downloaders/SnapchatDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Snapchat Saver Online Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Snapchat Saver Online online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "snapchat saver online, free online tool, no signup, snapchat-saver-online, free snapchat-saver-online, Snapchat Saver Online online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-saver-online",
	},
	openGraph: {
		title: "Free Snapchat Saver Online Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Snapchat Saver Online online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/snapchat-saver-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Saver Online Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Snapchat Saver Online online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/snapchat-saver-online");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SnapchatDownloader />
		</ToolLayout>
	);
}
