import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
	description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "sitemap url downloader, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/sitemap-url-downloader",
	},
	openGraph: {
		title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
		description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/sitemap-url-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
		description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/sitemap-url-downloader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
