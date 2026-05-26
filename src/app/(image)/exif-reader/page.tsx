import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ExifReaderTool from "@/components/tools/image/ExifReaderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free EXIF Reader Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free EXIF Reader online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
	keywords: "exif reader, free online tool, no signup, exif-reader, free exif-reader, Exif Reader online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/exif-reader",
	},
	openGraph: {
		title: "Free EXIF Reader Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free EXIF Reader online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
		url: "https://30tools.com/exif-reader",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free EXIF Reader Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free EXIF Reader online. Crop, resize, and optimize photos in your browser with no signup. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/exif-reader");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExifReaderTool />
		</ToolLayout>
	);
}
