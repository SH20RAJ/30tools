import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageToBase64Tool from "@/components/tools/image/ImageToBase64Tool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Image to Base64 Converter Online - No Signup | 30tools",
	description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "image to base64 converter, free online tool, no signup, image-to-base64-converter, free image-to-base64-converter, Image To Base64 Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-base64-converter",
	},
	openGraph: {
		title: "Free Image to Base64 Converter Online - No Signup | 30tools",
		description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/image-to-base64-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to Base64 Converter Online - No Signup | 30tools",
		description: "Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows.",
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
