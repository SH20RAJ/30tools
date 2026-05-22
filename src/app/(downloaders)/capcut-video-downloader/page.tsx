import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CapcutDownloader from "@/components/tools/downloaders/CapcutDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
	description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
	keywords: "capcut video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/capcut-video-downloader",
	},
	openGraph: {
		title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/capcut-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Capcut Video Downloader Online – Fast & No Signup | 30tools",
		description: "Download Capcut videos and templates easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/capcut-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CapcutDownloader />
		</ToolLayout>
	);
}
