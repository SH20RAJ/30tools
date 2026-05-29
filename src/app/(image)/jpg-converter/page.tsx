import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JPG Converter Online - No Signup | 30tools",
	description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use...",
	keywords: "jpg converter, free online tool, no signup, jpg-converter, free jpg-converter, Jpg Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-converter",
	},
	openGraph: {
		title: "Free JPG Converter Online - No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use...",
		url: "https://30tools.com/jpg-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG Converter Online - No Signup | 30tools",
		description: "Convert photos and images to JPG format instantly. Our free online JPG converter maintains high visual quality while optimizing file size for web use...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
