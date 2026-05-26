import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RedditDownloader from "@/components/tools/downloaders/RedditDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Reddit Media Saver Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Reddit Media Saver online. High-speed downloading with no signup needed. No signup required.",
	keywords: "reddit media saver, free online tool, no signup, reddit-media-saver, free reddit-media-saver, Reddit Media Saver online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-media-saver",
	},
	openGraph: {
		title: "Free Reddit Media Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Reddit Media Saver online. High-speed downloading with no signup needed. No signup required.",
		url: "https://30tools.com/reddit-media-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Media Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Reddit Media Saver online. High-speed downloading with no signup needed. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/reddit-media-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RedditDownloader />
		</ToolLayout>
	);
}
