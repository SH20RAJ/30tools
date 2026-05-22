import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free ASCII to Binary Converter Online - No Signup, Client-Side | 30tools",
	description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
	keywords: "ascii to binary converter, free online tool, no signup, ascii-to-binary-converter, free ascii-to-binary-converter, Ascii To Binary Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-binary-converter",
	},
	openGraph: {
		title: "Free ASCII to Binary Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ascii-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ASCII to Binary Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ascii-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="ascii-to-binary" />
		</ToolLayout>
	);
}
