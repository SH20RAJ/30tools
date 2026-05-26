import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramDPDownloader from "@/components/tools/downloaders/InstagramDPDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Insta Pfp Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Insta Pfp online. High-speed downloading with no signup needed. No registration needed.",
	keywords: "save insta pfp, free online tool, no signup, save-insta-pfp, free save-insta-pfp, Save Insta Pfp online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-insta-pfp",
	},
	openGraph: {
		title: "Free Save Insta Pfp Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Insta Pfp online. High-speed downloading with no signup needed. No registration needed.",
		url: "https://30tools.com/save-insta-pfp",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Insta Pfp Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Insta Pfp online. High-speed downloading with no signup needed. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-insta-pfp");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramDPDownloader />
		</ToolLayout>
	);
}
