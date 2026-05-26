import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Instagram Videos Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "instagram videos downloader, free online tool, no signup, instagram-videos-downloader, free instagram-videos-downloader, Instagram Videos Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-videos-downloader",
	},
	openGraph: {
		title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Videos Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/instagram-videos-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Videos Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Videos Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/instagram-videos-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramDownloader />
		</ToolLayout>
	);
}
