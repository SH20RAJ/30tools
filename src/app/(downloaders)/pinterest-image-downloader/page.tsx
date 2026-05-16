import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
	description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
	keywords: "pinterest image downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/pinterest-image-downloader",
	},
	openGraph: {
		title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
		url: "https://30tools.com/pinterest-image-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Image Downloader Online – Fast & No Signup | 30tools",
		description: "Download Pinterest images in original HD quality for free. Save pins, mood boards, and aesthetic visuals without watermarks. No signup required, instant downloads, and 100% private.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-image-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
