import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Channel ID Extractor Online - No Signup | 30tools",
	description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations...",
	keywords: "youtube channel id extractor, free online tool, no signup, youtube-channel-id-extractor, free youtube-channel-id-extractor, Youtube Channel Id Extractor online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-channel-id-extractor",
	},
	openGraph: {
		title: "Free YouTube Channel ID Extractor Online - No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations...",
		url: "https://30tools.com/youtube-channel-id-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Channel ID Extractor Online - No Signup | 30tools",
		description: "Extract the unique Channel ID from any YouTube URL instantly. Perfect for developer API calls, marketing automation, and third-party tool integrations...",
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
			<YouTubeDownloader />
		</ToolLayout>
	);
}
