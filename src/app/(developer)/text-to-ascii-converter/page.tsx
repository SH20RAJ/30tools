import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
	description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "text to ascii converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/text-to-ascii-converter",
	},
	openGraph: {
		title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-ascii-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Convert plain text into ASCII character codes instantly. Our free online tool provides decimal ASCII values for every character in your input string. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-ascii-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
