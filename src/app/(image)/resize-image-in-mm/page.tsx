import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ResizeImageCm from "@/components/tools/image/ResizeImageCm";

export const metadata = {
	title: "Free Resize Image in MM Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Resize Image in MM online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
	keywords: "resize-image-in-mm, Resize Image in MM",
	alternates: {
		canonical: "https://30tools.com/resize-image-in-mm",
	},
	openGraph: {
		title: "Free Resize Image in MM Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Resize Image in MM online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
		url: "https://30tools.com/resize-image-in-mm",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resize Image in MM Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Resize Image in MM online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/resize-image-in-mm");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ResizeImageCm defaultUnit="mm" />
		</ToolLayout>
	);
}
