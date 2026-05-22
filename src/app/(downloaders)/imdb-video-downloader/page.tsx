import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImdbDownloader from "@/components/tools/downloaders/ImdbDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
	keywords: "imdb video downloader, free online tool, no signup, imdb-video-downloader, free imdb-video-downloader, Imdb Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/imdb-video-downloader",
	},
	openGraph: {
		title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
		url: "https://30tools.com/imdb-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imdb Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save IMDb trailers, interviews, and clips to your device instantly. Our free online tool helps you keep high-quality movie metadata and videos for offline reference. 100% free, fast, and no signup required.",
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
