import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PinterestDownloader from "@/components/tools/downloaders/PinterestDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Clip Saver Online - No Signup | 30tools",
	description: "Save and download media files from multiple platforms with our free Pinterest Clip Saver online. High-speed downloading with no signup needed. Try it free now.",
	keywords: "pinterest clip saver, free online tool, no signup, pinterest-clip-saver, free pinterest-clip-saver, Pinterest Clip Saver online, video downloader, free download tool, online media saver, no signup download, 30tools",
	alternates: {
		canonical: "https://30tools.com/pinterest-clip-saver",
	},
	openGraph: {
		title: "Free Pinterest Clip Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Clip Saver online. High-speed downloading with no signup needed. Try it free now.",
		url: "https://30tools.com/pinterest-clip-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Clip Saver Online - No Signup | 30tools",
		description: "Save and download media files from multiple platforms with our free Pinterest Clip Saver online. High-speed downloading with no signup needed. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pinterest-clip-saver");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PinterestDownloader />
		</ToolLayout>
	);
}
