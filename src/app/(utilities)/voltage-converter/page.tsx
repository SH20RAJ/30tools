import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Voltage Converter Online - No Signup | 30tools",
	description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "voltage converter, free online tool, no signup, voltage-converter, free voltage-converter, Voltage Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/voltage-converter",
	},
	openGraph: {
		title: "Free Voltage Converter Online - No Signup | 30tools",
		description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/voltage-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Voltage Converter Online - No Signup | 30tools",
		description: "Free voltage converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/voltage-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="voltage" />
		</ToolLayout>
	);
}
