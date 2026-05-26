import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TagsFromTextTool from "@/components/tools/text/TagsFromTextTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Tags Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Text to Tags Converter online. Fast and private browser utility with no signup. Easy to use.",
	keywords: "text to tags converter, free online tool, no signup, text-to-tags-converter, free text-to-tags-converter, Text To Tags Converter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-tags-converter",
	},
	openGraph: {
		title: "Free Text to Tags Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text to Tags Converter online. Fast and private browser utility with no signup. Easy to use.",
		url: "https://30tools.com/text-to-tags-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Tags Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text to Tags Converter online. Fast and private browser utility with no signup. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-tags-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TagsFromTextTool />
		</ToolLayout>
	);
}
