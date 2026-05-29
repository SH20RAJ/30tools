import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG to ICO Converter Online - No Signup | 30tools",
	description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No...",
	keywords: "jpg to ico converter, free online tool, no signup, jpg-to-ico-converter, free jpg-to-ico-converter, Jpg To Ico Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-ico-converter",
	},
	openGraph: {
		title: "Free JPG to ICO Converter Online - No Signup | 30tools",
		description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No...",
		url: "https://30tools.com/jpg-to-ico-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to ICO Converter Online - No Signup | 30tools",
		description: "Convert JPG images to ICO favicon files for your website. Our free tool creates high-quality icons in multiple sizes for perfect browser compatibility. No...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-ico-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
