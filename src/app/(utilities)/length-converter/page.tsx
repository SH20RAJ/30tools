import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Length Converter Online - No Signup | 30tools",
	description: "Free length converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "length converter, free online tool, no signup, length-converter, free length-converter, Length Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/length-converter",
	},
	openGraph: {
		title: "Free Length Converter Online - No Signup | 30tools",
		description: "Free length converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/length-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Length Converter Online - No Signup | 30tools",
		description: "Free length converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/length-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="length" />
		</ToolLayout>
	);
}
