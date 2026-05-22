import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
	description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
	keywords: "youtube hashtag extractor, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-hashtag-extractor",
	},
	openGraph: {
		title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-hashtag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Hashtag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract all hashtags from any YouTube video instantly. Our free online tool helps you analyze competitor tagging strategies and optimize your own video SEO for better reach. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-hashtag-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
