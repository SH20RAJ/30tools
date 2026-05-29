import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ResizeImageCm from "@/components/tools/image/ResizeImageCm";

export const metadata = {
	title: "Free Image DPI Converter Online - No Signup | 30tools",
	description: "Change or convert your image's DPI (Dots Per Inch) to 300, 600, or custom values for official applications and printing.",
	keywords: "image-dpi-converter, Image DPI Converter",
	alternates: {
		canonical: "https://30tools.com/image-dpi-converter",
	},
	openGraph: {
		title: "Free Image DPI Converter Online - No Signup | 30tools",
		description: "Change or convert your image's DPI (Dots Per Inch) to 300, 600, or custom values for official applications and printing.",
		url: "https://30tools.com/image-dpi-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image DPI Converter Online - No Signup | 30tools",
		description: "Change or convert your image's DPI (Dots Per Inch) to 300, 600, or custom values for official applications and printing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-dpi-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ResizeImageCm defaultUnit="inch" defaultDpi="300" />
		</ToolLayout>
	);
}
