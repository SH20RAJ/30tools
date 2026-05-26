import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SitemapUrlDownloader from "@/components/tools/downloaders/SitemapUrlDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Sitemap Url Downloader Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Sitemap Url Downloader online. Optimize search presence with no signup. Easy to use.",
	keywords: "sitemap url downloader, free online tool, no signup, sitemap-url-downloader, free sitemap-url-downloader, Sitemap Url Downloader online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/sitemap-url-downloader",
	},
	openGraph: {
		title: "Free Sitemap Url Downloader Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Sitemap Url Downloader online. Optimize search presence with no signup. Easy to use.",
		url: "https://30tools.com/sitemap-url-downloader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Sitemap Url Downloader Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Sitemap Url Downloader online. Optimize search presence with no signup. Easy to use.",
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
