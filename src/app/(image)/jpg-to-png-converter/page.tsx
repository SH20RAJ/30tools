import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG to PNG Converter Online - No Signup | 30tools",
	description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused...",
	keywords: "jpg to png converter, convert jpg to png, jpeg to png, image format converter, free online tool, 30tools, jpg-to-png-converter, free jpg-to-png-converter, jpg to png converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/jpg-to-png-converter",
	},
	openGraph: {
		title: "Free JPG to PNG Converter Online - No Signup | 30tools",
		description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused...",
		url: "https://30tools.com/jpg-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to PNG Converter Online - No Signup | 30tools",
		description: "Convert JPG to PNG with transparency support. Maintain high image quality and convert formats instantly in your browser. Free, secure, and privacy-focused...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-png-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
