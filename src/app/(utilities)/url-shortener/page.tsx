import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import URLShortenerTool from "@/components/tools/utilities/URLShortenerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free URL Shortener Online - No Signup | 30tools",
	description: "Shorten long URLs for easier sharing",
	keywords: "url shortener, shorten url, link shortener, short link, free url shortener, 30tools, url-shortener, free url-shortener, url shortener online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/url-shortener",
	},
	openGraph: {
		title: "Free URL Shortener Online - No Signup | 30tools",
		description: "Shorten long URLs for easier sharing",
		url: "https://30tools.com/url-shortener",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Shortener Online - No Signup | 30tools",
		description: "Shorten long URLs for easier sharing",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/url-shortener");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<URLShortenerTool />
		</ToolLayout>
	);
}
