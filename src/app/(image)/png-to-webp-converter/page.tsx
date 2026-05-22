import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
	description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
	keywords: "png to webp converter, convert png to webp, image optimizer, webp converter, free online tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-webp-converter",
	},
	openGraph: {
		title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-webp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to WebP Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG to WebP to optimize your website speed. Significantly reduce file sizes while maintaining image transparency and quality. Free, fast, and secure online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-webp-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
