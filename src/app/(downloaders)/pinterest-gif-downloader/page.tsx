import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
	description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
	keywords: "pinterest gif downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/pinterest-gif-downloader",
	},
	openGraph: {
		title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
		description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-gif-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Gif Downloader Online – Fast & No Signup | 30tools",
		description: "Free online tool to download high-quality GIFs from Pinterest instantly. No registration required. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-gif-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PinterestDownloader />
		</ToolLayout>
	);
}
