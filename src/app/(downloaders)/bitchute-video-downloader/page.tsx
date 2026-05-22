import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BitchuteDownloader from "@/components/tools/downloaders/BitchuteDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
	keywords: "bitchute video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/bitchute-video-downloader",
	},
	openGraph: {
		title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
		url: "https://30tools.com/bitchute-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bitchute Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download your favorite Bitchute videos in one click. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/bitchute-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BitchuteDownloader />
		</ToolLayout>
	);
}
