import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import GaanaDownloader from "@/components/tools/downloaders/GaanaDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
	keywords: "gaana video downloader, free online tool, no signup, gaana-video-downloader, free gaana-video-downloader, Gaana Video Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/gaana-video-downloader",
	},
	openGraph: {
		title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
		url: "https://30tools.com/gaana-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Gaana Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Gaana music videos and content online with our free tool. Save high-quality videos for offline enjoyment without needing a premium subscription. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/gaana-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<GaanaDownloader />
		</ToolLayout>
	);
}
