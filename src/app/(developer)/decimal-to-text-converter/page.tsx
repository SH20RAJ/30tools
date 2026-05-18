import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
	keywords: "decimal to text converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/decimal-to-text-converter",
	},
	openGraph: {
		title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/decimal-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal character codes back to readable text instantly. Our free online tool helps you decode numeric data streams and debug text processing tasks in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/decimal-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="decimal-to-text" />
		</ToolLayout>
	);
}
