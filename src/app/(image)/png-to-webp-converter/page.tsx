import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to WebP Converter Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free PNG to WebP Converter online. Crop, resize, and optimize photos in your browser with no signup. Free & secure.",
	keywords: "png to webp converter, convert png to webp, image optimizer, webp converter, free online tool, 30tools, png-to-webp-converter, free png-to-webp-converter, png to webp converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/png-to-webp-converter",
	},
	openGraph: {
		title: "Free PNG to WebP Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free PNG to WebP Converter online. Crop, resize, and optimize photos in your browser with no signup. Free & secure.",
		url: "https://30tools.com/png-to-webp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to WebP Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free PNG to WebP Converter online. Crop, resize, and optimize photos in your browser with no signup. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-webp-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
