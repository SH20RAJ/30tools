import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageToPDFTool from "@/components/tools/pdf/ImageToPDF";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Image to PDF – Convert JPG, PNG to PDF Online for Free",
	description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
	alternates: {
		canonical: "https://30tools.com/image-to-pdf",
	},
	openGraph: {
		title: "Image to PDF – Free Online Image to PDF Converter",
		description: "Combine JPG, PNG, WebP images into a single PDF. Secure, fast, and works entirely in your browser.",
		url: "https://30tools.com/image-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Image to PDF – Combine Photos into PDF",
		description: "Convert images to PDF quickly and privately. No uploads required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-to-pdf");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageToPDFTool />
		</ToolLayout>
	);
}
