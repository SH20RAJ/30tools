import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SnapchatDownloader from "@/components/tools/downloaders/SnapchatDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
	description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
	keywords: "snapchat saver online, free online tool, no signup, snapchat-saver-online, free snapchat-saver-online, Snapchat Saver Online online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/snapchat-saver-online",
	},
	openGraph: {
		title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
		description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
		url: "https://30tools.com/snapchat-saver-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Snapchat Saver Online Online – Fast & No Signup | 30tools",
		description: "Download Snapchat stories and spotlight videos in high quality. Our free online tool helps you save ephemeral content before it disappears forever. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/snapchat-saver-online");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SnapchatDownloader />
		</ToolLayout>
	);
}
