import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SitemapUrlDownloader from "@/components/tools/downloaders/SitemapUrlDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Sitemap Url Downloader Online – Fast & No Signup | 30tools",
	description: "Free Sitemap Url Downloader online. Sitemap Url Downloader allows you to optimize your website quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "sitemap url downloader, free online tool, no signup, sitemap-url-downloader, free sitemap-url-downloader, Sitemap Url Downloader online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
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
			<SitemapUrlDownloader />
		</ToolLayout>
	);
}
