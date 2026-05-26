import ToolLayout from "@/components/tools/shared/ToolLayout";
import Base64ToImageTool from "@/components/tools/image/Base64ToImageTool";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Base64 to Image Converter Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Base64 to Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
	keywords: "base64 to image converter, free base64 to image converter, online base64 to image converter, no signup, 30tools, base64 decoder, base64-to-image-converter, free base64-to-image-converter, base64 to image converter online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/base64-to-image-converter",
	},
	openGraph: {
		title: "Free Base64 to Image Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Base64 to Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
		url: "https://30tools.com/base64-to-image-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 to Image Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Base64 to Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("base64-to-image-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolLayout tool={tool}>
				<Base64ToImageTool />
			</ToolLayout>
		</>
	);
}

