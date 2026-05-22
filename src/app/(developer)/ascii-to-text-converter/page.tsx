import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
	keywords: "ascii to text converter, free online tool, no signup, ascii-to-text-converter, free ascii-to-text-converter, Ascii To Text Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-text-converter",
	},
	openGraph: {
		title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ascii-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ascii-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="ascii-to-text" />
		</ToolLayout>
	);
}
