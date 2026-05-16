import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DownloaderEngine from "@/components/tools/downloaders/DownloaderEngine";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
	description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
	keywords: "youtube title extractor, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-title-extractor",
	},
	openGraph: {
		title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-extractor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Extractor Online – Fast & No Signup | 30tools",
		description: "Extract the exact title from any YouTube video instantly. Perfect for competitor research, SEO analysis, and content archiving. Free and secure online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-extractor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DownloaderEngine />
		</ToolLayout>
	);
}
