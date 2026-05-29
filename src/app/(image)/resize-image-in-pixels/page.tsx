import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ResizeImageCm from "@/components/tools/image/ResizeImageCm";

export const metadata = {
	title: "Free Resize Image in Pixels Online - No Signup | 30tools",
	description: "Resize your images by specifying exact width and height in pixels (px) for web, social media, and digital platforms.",
	keywords: "resize-image-in-pixels, Resize Image in Pixels",
	alternates: {
		canonical: "https://30tools.com/resize-image-in-pixels",
	},
	openGraph: {
		title: "Free Resize Image in Pixels Online - No Signup | 30tools",
		description: "Resize your images by specifying exact width and height in pixels (px) for web, social media, and digital platforms.",
		url: "https://30tools.com/resize-image-in-pixels",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resize Image in Pixels Online - No Signup | 30tools",
		description: "Resize your images by specifying exact width and height in pixels (px) for web, social media, and digital platforms.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/resize-image-in-pixels");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ResizeImageCm defaultUnit="px" />
		</ToolLayout>
	);
}
