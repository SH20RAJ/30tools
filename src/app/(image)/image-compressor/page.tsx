import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ImageCompressorTool from "@/components/tools/image/ImageCompressorTool";

export const metadata = {
	title: "Free Image Compressor Online - No Signup | 30tools",
	description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
	keywords: "image-compressor, Image Compressor, free image-compressor, Image Compressor online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-compressor",
	},
	openGraph: {
		title: "Free Image Compressor Online - No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
		url: "https://30tools.com/image-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Compressor Online - No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
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

