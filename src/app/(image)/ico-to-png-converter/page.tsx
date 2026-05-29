import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free ICO to PNG Converter Online - No Signup | 30tools",
	description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "ico to png converter, free online tool, no signup, ico-to-png-converter, free ico-to-png-converter, Ico To Png Converter online, image editing, photo editor, browser image tool, free photo utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/ico-to-png-converter",
	},
	openGraph: {
		title: "Free ICO to PNG Converter Online - No Signup | 30tools",
		description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/ico-to-png-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ICO to PNG Converter Online - No Signup | 30tools",
		description: "Free ico to png converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ico-to-png-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageConverterTool />
		</ToolLayout>
	);
}
