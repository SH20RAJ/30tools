import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Tag Extractor online. Fast, secure browser-based utility with no registration. No signup required.",
	keywords: "youtube tag extractor, youtube tags, youtube keywords, youtube seo tags, video tags generator, free tool, 30tools, youtube-tag-extractor, free youtube-tag-extractor, youtube tag extractor online, youtube tool, video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-tag-extractor",
	},
	openGraph: {
		title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Tag Extractor online. Fast, secure browser-based utility with no registration. No signup required.",
		url: "https://30tools.com/youtube-tag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Tag Extractor online. Fast, secure browser-based utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-tag-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
