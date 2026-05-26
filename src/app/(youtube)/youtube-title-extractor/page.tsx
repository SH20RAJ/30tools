import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeDownloader from "@/components/tools/downloaders/YouTubeDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Extractor Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free YouTube Title Extractor online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "youtube title extractor, free online tool, no signup, youtube-title-extractor, free youtube-title-extractor, Youtube Title Extractor online, YouTube tool, free YouTube utility, YouTube optimizer, video analytics, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-title-extractor",
	},
	openGraph: {
		title: "Free YouTube Title Extractor Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Extractor online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/youtube-title-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Extractor Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free YouTube Title Extractor online. Fast, secure browser-based utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeDownloader />
		</ToolLayout>
	);
}
