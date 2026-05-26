import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDownloader from "@/components/tools/downloaders/InstagramDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Ig Content Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Ig Content online. High-speed downloading with no signup needed. 100% free and secure.",
	keywords: "save ig content, free online tool, no signup, save-ig-content, free save-ig-content, Save Ig Content online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-ig-content",
	},
	openGraph: {
		title: "Free Save Ig Content Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Ig Content online. High-speed downloading with no signup needed. 100% free and secure.",
		url: "https://30tools.com/save-ig-content",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Ig Content Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Ig Content online. High-speed downloading with no signup needed. 100% free and secure.",
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
