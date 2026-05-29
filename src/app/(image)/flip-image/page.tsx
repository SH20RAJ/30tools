import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Flip Image Online - No Signup | 30tools",
	description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "flip image, free online tool, no signup, flip-image, free flip-image, Flip Image online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/flip-image",
	},
	openGraph: {
		title: "Free Flip Image Online - No Signup | 30tools",
		description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/flip-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Flip Image Online - No Signup | 30tools",
		description: "Free flip image tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/flip-image");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageResizerTool />
		</ToolLayout>
	);
}
