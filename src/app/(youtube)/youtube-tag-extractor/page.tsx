import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
	description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
	keywords: "youtube tag extractor, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-tag-extractor",
	},
	openGraph: {
		title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-tag-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Tag Extractor Online – Fast & No Signup | 30tools",
		description: "Extract hidden tags from any YouTube video instantly. Our free online tool helps you discover the keywords used by top-performing creators to boost your own video SEO. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-tag-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
