import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookStoryDownloader from "@/components/tools/downloaders/FacebookStoryDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
	description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
	keywords: "facebook story downloader, save facebook stories, fb story saver, facebook story saver, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/facebook-story-downloader",
	},
	openGraph: {
		title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
		url: "https://30tools.com/facebook-story-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Facebook Story Downloader Online – Fast & No Signup | 30tools",
		description: "Download Facebook stories in high resolution instantly. Our free online tool helps you save story content for offline viewing without any signup or account login. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/facebook-story-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookStoryDownloader />
		</ToolLayout>
	);
}
