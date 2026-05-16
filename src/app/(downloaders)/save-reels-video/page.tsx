import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
	description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
	keywords: "save reels video, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-reels-video",
	},
	openGraph: {
		title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
		description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-reels-video",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Reels Video Online – Fast & No Signup | 30tools",
		description: "Download viral Reels from Instagram and other platforms instantly. Our free online tool provides high-speed downloads for all your favorite short-form video content. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-reels-video");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
