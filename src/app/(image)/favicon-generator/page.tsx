import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FaviconGeneratorTool from "@/components/tools/image/FaviconGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Favicon Generator Online - No Signup | 30tools",
	description: "Generate favicons from text, images, or emojis for websites",
	keywords: "favicon generator, free online tool, no signup, favicon-generator, free favicon-generator, Favicon Generator online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/favicon-generator",
	},
	openGraph: {
		title: "Free Favicon Generator Online - No Signup | 30tools",
		description: "Generate favicons from text, images, or emojis for websites",
		url: "https://30tools.com/favicon-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Favicon Generator Online - No Signup | 30tools",
		description: "Generate favicons from text, images, or emojis for websites",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/favicon-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FaviconGeneratorTool />
		</ToolLayout>
	);
}
