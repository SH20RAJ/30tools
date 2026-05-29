import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to GIF Converter Online - No Signup | 30tools",
	description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file...",
	keywords: "png to gif converter, free online tool, no signup, png-to-gif-converter, free png-to-gif-converter, Png To Gif Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-gif-converter",
	},
	openGraph: {
		title: "Free PNG to GIF Converter Online - No Signup | 30tools",
		description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file...",
		url: "https://30tools.com/png-to-gif-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to GIF Converter Online - No Signup | 30tools",
		description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-gif-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
