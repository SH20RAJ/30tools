import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free HEX to Decimal Converter online. Secure, local developer utility with no registration.",
	keywords: "hex to decimal converter, free online tool, no signup, hex-to-decimal-converter, free hex-to-decimal-converter, Hex To Decimal Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-decimal-converter",
	},
	openGraph: {
		title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HEX to Decimal Converter online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/hex-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Decimal Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HEX to Decimal Converter online. Secure, local developer utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hex-to-decimal-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="hex-to-decimal" />
		</ToolLayout>
	);
}
