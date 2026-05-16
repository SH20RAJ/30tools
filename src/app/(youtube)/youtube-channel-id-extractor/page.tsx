import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
	description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
	keywords: "youtube channel id extractor, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-id-extractor",
	},
	openGraph: {
		title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-channel-id-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel ID Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations. Free and fast online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-channel-id-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
