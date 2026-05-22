import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KwaiDownloader from "@/components/tools/downloaders/KwaiDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
	description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
	keywords: "kwai video downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/kwai-video-downloader",
	},
	openGraph: {
		title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/kwai-video-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Kwai Video Downloader Online – Fast & No Signup | 30tools",
		description: "Save your favorite Kwai videos without watermark instantly. Our free online tool helps you download trending clips and funny videos from Kwai in high-definition quality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/kwai-video-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KwaiDownloader />
		</ToolLayout>
	);
}
