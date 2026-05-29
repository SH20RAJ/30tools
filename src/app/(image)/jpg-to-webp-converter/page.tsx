import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG to WebP Converter Online - No Signup | 30tools",
	description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up...",
	keywords: "jpg to webp converter, convert jpg to webp, image optimizer, webp converter, free online tool, 30tools, jpg-to-webp-converter, free jpg-to-webp-converter, jpg to webp converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/jpg-to-webp-converter",
	},
	openGraph: {
		title: "Free JPG to WebP Converter Online - No Signup | 30tools",
		description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up...",
		url: "https://30tools.com/jpg-to-webp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to WebP Converter Online - No Signup | 30tools",
		description: "Convert JPG to WebP for superior web performance. Reduce file sizes significantly without losing quality. Our free online converter helps you speed up...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-webp-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
