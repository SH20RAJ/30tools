import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import AllDownloaders from "@/components/tools/downloaders/AllDownloaders";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Downloaders Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Downloaders online. High-speed downloading with no signup needed. 100% free and easy to use.",
	keywords: "downloaders, free online tool, no signup, free downloaders, Downloaders online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/downloaders",
	},
	openGraph: {
		title: "Free Downloaders Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Downloaders online. High-speed downloading with no signup needed. 100% free and easy to use.",
		url: "https://30tools.com/downloaders",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Downloaders Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Downloaders online. High-speed downloading with no signup needed. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/downloaders");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AllDownloaders />
		</ToolLayout>
	);
}
