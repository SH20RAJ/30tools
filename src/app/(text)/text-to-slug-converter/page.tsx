import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SlugTool from "@/components/tools/text/SlugTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Slug Converter Online - No Signup, Instant Results | 30tools",
	description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
	keywords: "text to slug converter, free online tool, no signup, text-to-slug-converter, free text-to-slug-converter, Text To Slug Converter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-slug-converter",
	},
	openGraph: {
		title: "Free Text to Slug Converter Online - No Signup, Instant Results | 30tools",
		description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-slug-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Slug Converter Online - No Signup, Instant Results | 30tools",
		description: "Transform any text or title into a URL-friendly slug instantly. Perfect for SEO-friendly web development, blog posts, and clean link structures. Free and fast online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-slug-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SlugTool />
		</ToolLayout>
	);
}
