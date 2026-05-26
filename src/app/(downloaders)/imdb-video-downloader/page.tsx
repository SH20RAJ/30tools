import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImdbDownloader from "@/components/tools/downloaders/ImdbDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Imdb Video Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Imdb Video Downloader online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "imdb video downloader, free online tool, no signup, imdb-video-downloader, free imdb-video-downloader, Imdb Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/imdb-video-downloader",
	},
	openGraph: {
		title: "Free Imdb Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Imdb Video Downloader online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/imdb-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imdb Video Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Imdb Video Downloader online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/imdb-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImdbDownloader />
		</ToolLayout>
	);
}
