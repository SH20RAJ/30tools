import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TagsFromTextTool from "@/components/tools/text/TagsFromTextTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Hashtags Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Text to Hashtags Converter online. Fast and private browser utility with no signup.",
	keywords: "text to hashtags converter, free online tool, no signup, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-hashtags-converter",
	},
	openGraph: {
		title: "Free Text to Hashtags Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text to Hashtags Converter online. Fast and private browser utility with no signup.",
		url: "https://30tools.com/text-to-hashtags-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Hashtags Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text to Hashtags Converter online. Fast and private browser utility with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-hashtags-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TagsFromTextTool />
		</ToolLayout>
	);
}
