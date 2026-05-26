import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image Converter Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
	keywords: "image converter, convert image format online, jpg png webp converter, free online tool, 30tools, image-converter, free image-converter, image converter online, image editing, photo editor, browser image tool, free photo utility",
	alternates: {
		canonical: "https://30tools.com/image-converter",
	},
	openGraph: {
		title: "Free Image Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		url: "https://30tools.com/image-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Converter Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Image Converter online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("image-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolLayout tool={tool}>
				<ImageConverterTool />
			</ToolLayout>
		</>
	);
}

