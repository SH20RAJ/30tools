import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PNG to BMP Converter Online - No Signup | 30tools",
	description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast...",
	keywords: "png to bmp converter, free online tool, no signup, png-to-bmp-converter, free png-to-bmp-converter, Png To Bmp Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-bmp-converter",
	},
	openGraph: {
		title: "Free PNG to BMP Converter Online - No Signup | 30tools",
		description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast...",
		url: "https://30tools.com/png-to-bmp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to BMP Converter Online - No Signup | 30tools",
		description: "Convert PNG images to BMP format instantly. Our free online converter preserves original quality while ensuring compatibility with legacy software. Fast...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/png-to-bmp-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
