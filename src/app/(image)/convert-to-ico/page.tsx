import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Convert to ICO Online - No Signup | 30tools",
	description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "convert to ico, free online tool, no signup, convert-to-ico, free convert-to-ico, Convert To Ico online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-to-ico",
	},
	openGraph: {
		title: "Free Convert to ICO Online - No Signup | 30tools",
		description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/convert-to-ico",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert to ICO Online - No Signup | 30tools",
		description: "Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/convert-to-ico");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
