import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RedditDownloader from "@/components/tools/downloaders/RedditDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
	description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
	keywords: "reddit media saver, free online tool, no signup, reddit-media-saver, free reddit-media-saver, Reddit Media Saver online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/reddit-media-saver",
	},
	openGraph: {
		title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
		description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
		url: "https://30tools.com/reddit-media-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Reddit Media Saver Online – Fast & No Signup | 30tools",
		description: "Save videos, images, and GIFs from Reddit instantly. Our free online tool handles multiple subreddits and provides high-quality downloads for offline viewing. 100% free, fast, and no signup required.",
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
