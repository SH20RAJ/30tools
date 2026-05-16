import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Octal to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert octal character codes back to readable text instantly. Our free online tool helps you decode data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
	keywords: "octal to text converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/octal-to-text-converter",
	},
	openGraph: {
		title: "Free Octal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal character codes back to readable text instantly. Our free online tool helps you decode data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/octal-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Octal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal character codes back to readable text instantly. Our free online tool helps you decode data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/octal-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
