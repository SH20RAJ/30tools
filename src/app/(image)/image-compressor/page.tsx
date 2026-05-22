import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";

export const metadata = {
	title: "Image Compressor – Reduce JPG, PNG, WebP File Sizes Online for Free",
	description: "Compress images online without losing quality. Reduce JPG, PNG, WebP file sizes instantly with our free image optimizer. Secure, browser-based compression with no signup required.",
	
	keywords: "image-compressor, Image Compressor, free image-compressor, Image Compressor online, image editing, photo editor, browser image tool, free photo utility, 30tools",alternates: {
		canonical: "https://30tools.com/image-compressor",
	},
	openGraph: {
		title: "Image Compressor – Free Online Image Optimization",
		description: "Reduce image file sizes while preserving quality. Supports JPG, PNG, WebP. 100% private, processed in your browser.",
		url: "https://30tools.com/image-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Image Compressor – Optimize Images for Web",
		description: "Free online image compressor. Reduce file sizes for faster websites.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-compressor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageCompressorTool />
		</ToolLayout>
	);
}

