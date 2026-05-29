import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG to GIF Converter Online - No Signup | 30tools",
	description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online...",
	keywords: "jpg to gif converter, free online tool, no signup, jpg-to-gif-converter, free jpg-to-gif-converter, Jpg To Gif Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-gif-converter",
	},
	openGraph: {
		title: "Free JPG to GIF Converter Online - No Signup | 30tools",
		description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online...",
		url: "https://30tools.com/jpg-to-gif-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to GIF Converter Online - No Signup | 30tools",
		description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-gif-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
