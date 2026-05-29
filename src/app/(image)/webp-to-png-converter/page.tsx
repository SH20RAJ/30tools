import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free WebP to PNG Converter Online - No Signup | 30tools",
	description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool.",
	keywords: "webp to png converter, convert webp to png, image format converter, online image converter, free tool, 30tools, webp-to-png-converter, free webp-to-png-converter, webp to png converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/webp-to-png-converter",
	},
	openGraph: {
		title: "Free WebP to PNG Converter Online - No Signup | 30tools",
		description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool.",
		url: "https://30tools.com/webp-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WebP to PNG Converter Online - No Signup | 30tools",
		description: "Convert WebP to PNG to restore transparency and compatibility with all image editors. High-quality, free, and privacy-focused online conversion tool.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/webp-to-png-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
