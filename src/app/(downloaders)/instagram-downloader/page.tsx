import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Instagram Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Instagram Downloader online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "instagram downloader, download instagram videos, instagram reels downloader, instagram photo downloader, free online tool, 30tools, instagram-downloader, free instagram-downloader, instagram downloader online, online downloader, free media saver, video downloader",
	alternates: {
		canonical: "https://30tools.com/instagram-downloader",
	},
	openGraph: {
		title: "Free Instagram Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Downloader online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/instagram-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Instagram Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Instagram Downloader online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/instagram-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramDownloader />
		</ToolLayout>
	);
}
