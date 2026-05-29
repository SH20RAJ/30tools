import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
	description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your...",
	keywords: "youtube tag extractor, youtube tags, youtube keywords, youtube seo tags, video tags generator, free tool, 30tools, youtube-tag-extractor, free youtube-tag-extractor, youtube tag extractor online, youtube tool, video downloader",
	alternates: {
		canonical: "https://30tools.com/youtube-tag-extractor",
	},
	openGraph: {
		title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your...",
		url: "https://30tools.com/youtube-tag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your...",
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
