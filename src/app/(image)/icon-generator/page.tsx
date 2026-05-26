import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FaviconGeneratorTool from "@/components/tools/image/FaviconGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Icon Generator Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Icon Generator online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
	keywords: "icon, generator, free icon generator, online icon generator, 30tools, icon-generator, icon generator, free icon-generator, icon generator online, image editing, photo editor, browser image tool",
	alternates: {
		canonical: "https://30tools.com/icon-generator",
	},
	openGraph: {
		title: "Free Icon Generator Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Icon Generator online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		url: "https://30tools.com/icon-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Icon Generator Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Icon Generator online. Crop, resize, and optimize photos in your browser with no signup. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/icon-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FaviconGeneratorTool />
		</ToolLayout>
	);
}
