import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageToBase64Tool from "@/components/tools/image/ImageToBase64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Image to Base64 Converter Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Image to Base64 Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
	keywords: "image to base64 converter, free online tool, no signup, image-to-base64-converter, free image-to-base64-converter, Image To Base64 Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-base64-converter",
	},
	openGraph: {
		title: "Free Image to Base64 Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Image to Base64 Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
		url: "https://30tools.com/image-to-base64-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to Base64 Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Image to Base64 Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-to-base64-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageToBase64Tool />
		</ToolLayout>
	);
}
