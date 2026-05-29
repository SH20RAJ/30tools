import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Each Converter Online - No Signup | 30tools",
	description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "each converter, free online tool, no signup, each-converter, free each-converter, Each Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/each-converter",
	},
	openGraph: {
		title: "Free Each Converter Online - No Signup | 30tools",
		description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/each-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Each Converter Online - No Signup | 30tools",
		description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/each-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="dimensionless" />
		</ToolLayout>
	);
}
