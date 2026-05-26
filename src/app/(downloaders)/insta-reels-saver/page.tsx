import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Insta Reels Saver Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Insta Reels Saver online. High-speed downloading with no signup needed. No signup required.",
	keywords: "insta reels saver, free online tool, no signup, insta-reels-saver, free insta-reels-saver, Insta Reels Saver online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/insta-reels-saver",
	},
	openGraph: {
		title: "Free Insta Reels Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Insta Reels Saver online. High-speed downloading with no signup needed. No signup required.",
		url: "https://30tools.com/insta-reels-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Insta Reels Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Insta Reels Saver online. High-speed downloading with no signup needed. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/insta-reels-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramReelDownloader />
		</ToolLayout>
	);
}
