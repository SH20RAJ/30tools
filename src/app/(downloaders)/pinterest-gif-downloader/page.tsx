import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Pinterest Gif Downloader online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "pinterest gif downloader, free online tool, no signup, pinterest-gif-downloader, free pinterest-gif-downloader, Pinterest Gif Downloader online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-gif-downloader",
	},
	openGraph: {
		title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Gif Downloader online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/pinterest-gif-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Gif Downloader Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Gif Downloader online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-gif-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PinterestDownloader />
		</ToolLayout>
	);
}
