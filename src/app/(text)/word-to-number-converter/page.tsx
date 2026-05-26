import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import WordToNumberTool from "@/components/tools/text/WordToNumberTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Word to Number Converter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Word to Number Converter online. Fast and private browser utility with no signup. 100% free.",
	keywords: "word to number converter, free online tool, no signup, word-to-number-converter, free word-to-number-converter, Word To Number Converter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-to-number-converter",
	},
	openGraph: {
		title: "Free Word to Number Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Word to Number Converter online. Fast and private browser utility with no signup. 100% free.",
		url: "https://30tools.com/word-to-number-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word to Number Converter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Word to Number Converter online. Fast and private browser utility with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/word-to-number-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<WordToNumberTool />
		</ToolLayout>
	);
}
