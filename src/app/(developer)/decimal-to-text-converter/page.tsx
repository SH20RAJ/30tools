import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Decimal to Text Converter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free Decimal to Text Converter online. Secure, local developer utility with no registration.",
	keywords: "decimal to text converter, free online tool, no signup, decimal-to-text-converter, free decimal-to-text-converter, Decimal To Text Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/decimal-to-text-converter",
	},
	openGraph: {
		title: "Free Decimal to Text Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Decimal to Text Converter online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/decimal-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Text Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Decimal to Text Converter online. Secure, local developer utility with no registration.",
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
