import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PhotoEnhancerTool from "@/components/tools/image/PhotoEnhancerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Photo Enhancer Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Photo Enhancer online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
	keywords: "photo enhancer, free online tool, no signup, photo-enhancer, free photo-enhancer, Photo Enhancer online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/photo-enhancer",
	},
	openGraph: {
		title: "Free Photo Enhancer Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Photo Enhancer online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		url: "https://30tools.com/photo-enhancer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Photo Enhancer Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Photo Enhancer online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/photo-enhancer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PhotoEnhancerTool />
		</ToolLayout>
	);
}
