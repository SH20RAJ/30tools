import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
	description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
	keywords: "save insta pfp, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-insta-pfp",
	},
	openGraph: {
		title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
		description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-insta-pfp",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Insta Pfp Online – Fast & No Signup | 30tools",
		description: "View and download Instagram profile pictures in full resolution. Our free online tool provides high-quality DP downloads for any public Instagram account. 100% free, fast, and no signup required.",
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
			<DownloaderEngine />
		</ToolLayout>
	);
}
