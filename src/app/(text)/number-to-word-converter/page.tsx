import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import NumberToWordTool from "@/components/tools/text/NumberToWordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Number to Word Converter Online - No Signup, Instant Results | 30tools",
	description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
	keywords: "number to word converter, free online tool, no signup, number-to-word-converter, free number-to-word-converter, Number To Word Converter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/number-to-word-converter",
	},
	openGraph: {
		title: "Free Number to Word Converter Online - No Signup, Instant Results | 30tools",
		description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/number-to-word-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Number to Word Converter Online - No Signup, Instant Results | 30tools",
		description: "Convert numbers to words instantly with our free online converter. Perfect for writing checks, legal documents, or educational purposes. Supports multiple formats and large numbers. 100% free, fast, and no signup required.",
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
