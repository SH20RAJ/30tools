import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free WebP to JPG Converter Online - No Signup | 30tools",
	description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves...",
	keywords: "webp to jpg converter, convert webp to jpg, image format converter, free online tool, 30tools, webp-to-jpg-converter, free webp-to-jpg-converter, webp to jpg converter online, image editing, photo editor, browser image tool, free photo utility",
	alternates: {
		canonical: "https://30tools.com/webp-to-jpg-converter",
	},
	openGraph: {
		title: "Free WebP to JPG Converter Online - No Signup | 30tools",
		description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves...",
		url: "https://30tools.com/webp-to-jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free WebP to JPG Converter Online - No Signup | 30tools",
		description: "Convert WebP images to JPG format for maximum compatibility across all devices and platforms. Our free online converter is fast, secure, and preserves...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/webp-to-jpg-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
