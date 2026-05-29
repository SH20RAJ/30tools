import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG to BMP Converter Online - No Signup | 30tools",
	description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without...",
	keywords: "jpg to bmp converter, free online tool, no signup, jpg-to-bmp-converter, free jpg-to-bmp-converter, Jpg To Bmp Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-bmp-converter",
	},
	openGraph: {
		title: "Free JPG to BMP Converter Online - No Signup | 30tools",
		description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without...",
		url: "https://30tools.com/jpg-to-bmp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to BMP Converter Online - No Signup | 30tools",
		description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-bmp-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
