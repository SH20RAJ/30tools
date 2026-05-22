import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import InstagramReelDownloader from "@/components/tools/downloaders/InstagramReelDownloader";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
	description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
	keywords: "save instagram clips, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/save-instagram-clips",
	},
	openGraph: {
		title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
		description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
		url: "https://30tools.com/save-instagram-clips",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Save Instagram Clips Online – Fast & No Signup | 30tools",
		description: "Save Instagram clips, videos, and photos to your device instantly. Our free online downloader supports all public IG content and provides high-quality MP4/JPG files. 100% free, fast, and no signup required.",
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
