import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FacebookStoryDownloader from "@/components/tools/downloaders/FacebookStoryDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Save Fb Stories Anonymous online. High-speed downloading with no signup needed. Easy to use.",
	keywords: "save fb stories anonymous, anonymous facebook story viewer, fb story downloader, anonymous story viewer, 30tools, save-fb-stories-anonymous, free save-fb-stories-anonymous, save fb stories anonymous online, online downloader, free media saver, video downloader, url downloader",
	alternates: {
		canonical: "https://30tools.com/save-fb-stories-anonymous",
	},
	openGraph: {
		title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Fb Stories Anonymous online. High-speed downloading with no signup needed. Easy to use.",
		url: "https://30tools.com/save-fb-stories-anonymous",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Fb Stories Anonymous Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Save Fb Stories Anonymous online. High-speed downloading with no signup needed. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/save-fb-stories-anonymous");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FacebookStoryDownloader />
		</ToolLayout>
	);
}
