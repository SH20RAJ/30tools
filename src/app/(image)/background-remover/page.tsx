import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Background Remover Online - No Signup | 30tools",
	description: "Edit, convert, and compress images with our free Background Remover online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
	keywords: "background-remover, Background Remover, free background-remover, Background Remover online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Free Background Remover Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Background Remover online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Background Remover Online - No Signup | 30tools",
		description: "Edit, convert, and compress images with our free Background Remover online. Crop, resize, and optimize photos in your browser with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/background-remover");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BackgroundRemoverTool />
		</ToolLayout>
	);
}
