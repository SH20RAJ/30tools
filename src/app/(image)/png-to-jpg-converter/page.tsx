import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to JPG Converter Online - No Signup | 30tools",
	description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in...",
	keywords: "png to jpg converter, convert png to jpg, image format converter, online image converter, free tool, 30tools, png-to-jpg-converter, free png-to-jpg-converter, png to jpg converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/png-to-jpg-converter",
	},
	openGraph: {
		title: "Free PNG to JPG Converter Online - No Signup | 30tools",
		description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in...",
		url: "https://30tools.com/png-to-jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to JPG Converter Online - No Signup | 30tools",
		description: "Convert PNG images to JPG format for smaller file sizes and better web compatibility. Our free online tool maintains high quality and works instantly in...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-jpg-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
