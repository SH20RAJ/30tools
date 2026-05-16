import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
	description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
	keywords: "pinterest clip saver, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/pinterest-clip-saver",
	},
	openGraph: {
		title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
		description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
		url: "https://30tools.com/pinterest-clip-saver",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pinterest Clip Saver Online – Fast & No Signup | 30tools",
		description: "Save Pinterest video clips and GIFs to your device easily. Our free online tool helps you download inspirational content for offline viewing and project reference. 100% free, fast, and no signup required.",
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
			<DownloaderEngine />
		</ToolLayout>
	);
}
