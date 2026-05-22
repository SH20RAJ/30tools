import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImgurDownloader from "@/components/tools/downloaders/ImgurDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
	keywords: "imgur video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/imgur-video-downloader",
	},
	openGraph: {
		title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
		url: "https://30tools.com/imgur-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Imgur Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Imgur videos and GIFs to your device easily. Our free online tool is fast, secure, and preserves the original quality of the content. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/imgur-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImgurDownloader />
		</ToolLayout>
	);
}
