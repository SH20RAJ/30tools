import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SnapchatDownloader from "@/components/tools/downloaders/SnapchatDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Snaps To Gallery Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Snaps To Gallery online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "save snaps to gallery, free online tool, no signup, save-snaps-to-gallery, free save-snaps-to-gallery, Save Snaps To Gallery online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-snaps-to-gallery",
	},
	openGraph: {
		title: "Free Save Snaps To Gallery Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Snaps To Gallery online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/save-snaps-to-gallery",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Snaps To Gallery Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Snaps To Gallery online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-snaps-to-gallery");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SnapchatDownloader />
		</ToolLayout>
	);
}
