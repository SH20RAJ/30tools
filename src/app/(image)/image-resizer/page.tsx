import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Image Resizer Online - No Signup | 30tools",
	description: "Resize images with custom dimensions and aspect ratios",
	keywords: "image resizer, resize image online, photo resizer, image dimension converter, free online tool, 30tools, image-resizer, free image-resizer, image resizer online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/image-resizer",
	},
	openGraph: {
		title: "Free Image Resizer Online - No Signup | 30tools",
		description: "Resize images with custom dimensions and aspect ratios",
		url: "https://30tools.com/image-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Resizer Online - No Signup | 30tools",
		description: "Resize images with custom dimensions and aspect ratios",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-resizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageResizerTool />
		</ToolLayout>
	);
}
