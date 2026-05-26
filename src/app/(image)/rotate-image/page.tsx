import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Rotate Image Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Rotate Image online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
	keywords: "rotate image, free online tool, no signup, rotate-image, free rotate-image, Rotate Image online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/rotate-image",
	},
	openGraph: {
		title: "Free Rotate Image Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Rotate Image online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
		url: "https://30tools.com/rotate-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Rotate Image Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Rotate Image online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/rotate-image");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageResizerTool />
		</ToolLayout>
	);
}
