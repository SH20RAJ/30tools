import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SimpleTeraboxPlayer from "@/components/tools/downloaders/SimpleTeraboxPlayer";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
	keywords: "terabox video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/terabox-downloader",
	},
	openGraph: {
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		url: "https://30tools.com/terabox-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terabox Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Terabox videos with direct links and embed custom video players 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/terabox-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SimpleTeraboxPlayer />
		</ToolLayout>
	);
}
