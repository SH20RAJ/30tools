import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Instagram Clips Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Instagram Clips online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "save instagram clips, free online tool, no signup, save-instagram-clips, free save-instagram-clips, Save Instagram Clips online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/save-instagram-clips",
	},
	openGraph: {
		title: "Free Save Instagram Clips Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Instagram Clips online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/save-instagram-clips",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Instagram Clips Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Instagram Clips online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-instagram-clips");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<InstagramReelDownloader />
		</ToolLayout>
	);
}
