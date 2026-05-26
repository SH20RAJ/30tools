import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import NumberToWordTool from "@/components/tools/text/NumberToWordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Number to Word Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Number to Word Converter online. Fast and private browser utility with no signup. 100% free.",
	keywords: "number to word converter, free online tool, no signup, number-to-word-converter, free number-to-word-converter, Number To Word Converter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/number-to-word-converter",
	},
	openGraph: {
		title: "Free Number to Word Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Number to Word Converter online. Fast and private browser utility with no signup. 100% free.",
		url: "https://30tools.com/number-to-word-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Number to Word Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Number to Word Converter online. Fast and private browser utility with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/number-to-word-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<NumberToWordTool />
		</ToolLayout>
	);
}
