import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ResizeImageCm from "@/components/tools/image/ResizeImageCm";

export const metadata = {
	title: "Free Resize Image in CM Online - No Signup | 30tools",
	description: "Resize your images by specifying width and height in centimeters (cm), millimeters (mm), or inches for printing and forms.",
	keywords: "resize-image-in-cm, Resize Image in CM, resize image cm, resize image mm, resize image inches, 30tools",
	alternates: {
		canonical: "https://30tools.com/resize-image-in-cm",
	},
	openGraph: {
		title: "Free Resize Image in CM Online - No Signup | 30tools",
		description: "Resize your images by specifying width and height in centimeters (cm), millimeters (mm), or inches for printing and forms.",
		url: "https://30tools.com/resize-image-in-cm",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resize Image in CM Online - No Signup | 30tools",
		description: "Resize your images by specifying width and height in centimeters (cm), millimeters (mm), or inches for printing and forms.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/resize-image-in-cm");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ResizeImageCm />
		</ToolLayout>
	);
}
