import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
	description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
	keywords: "save ig content, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-ig-content",
	},
	openGraph: {
		title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
		description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-ig-content",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Ig Content Online – Fast & No Signup | 30tools",
		description: "Download any public Instagram content—photos, videos, reels, and stories—to your device for free. Our all-in-one downloader provides high-quality media saves instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-ig-content");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramDownloader />
		</ToolLayout>
	);
}
