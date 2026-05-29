import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to ICO Converter Online - No Signup | 30tools",
	description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first...",
	keywords: "png to ico converter, free online tool, no signup, png-to-ico-converter, free png-to-ico-converter, Png To Ico Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-ico-converter",
	},
	openGraph: {
		title: "Free PNG to ICO Converter Online - No Signup | 30tools",
		description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first...",
		url: "https://30tools.com/png-to-ico-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to ICO Converter Online - No Signup | 30tools",
		description: "Generate high-quality ICO favicon files from PNG images. Our free tool supports multiple sizes for perfect website icon compatibility. Privacy-first...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-ico-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
