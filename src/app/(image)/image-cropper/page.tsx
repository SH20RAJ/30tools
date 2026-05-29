import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Image Cropper Online - No Signup | 30tools",
	description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "image cropper, free online tool, no signup, image-cropper, free image-cropper, Image Cropper online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-cropper",
	},
	openGraph: {
		title: "Free Image Cropper Online - No Signup | 30tools",
		description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/image-cropper",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Cropper Online - No Signup | 30tools",
		description: "Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-cropper");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageResizerTool />
		</ToolLayout>
	);
}
