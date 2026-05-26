import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDPDownloader from "@/components/tools/downloaders/InstagramDPDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Image Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Instagram Image Downloader online. High-speed downloading with no signup needed. 100% free.",
	keywords: "instagram image downloader, free online tool, no signup, instagram-image-downloader, free instagram-image-downloader, Instagram Image Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/instagram-image-downloader",
	},
	openGraph: {
		title: "Free Instagram Image Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Image Downloader online. High-speed downloading with no signup needed. 100% free.",
		url: "https://30tools.com/instagram-image-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Image Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Image Downloader online. High-speed downloading with no signup needed. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/instagram-image-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramDPDownloader />
		</ToolLayout>
	);
}
