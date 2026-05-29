import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Energy Converter Online - No Signup | 30tools",
	description: "Free energy converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "energy converter, free online tool, no signup, energy-converter, free energy-converter, Energy Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/energy-converter",
	},
	openGraph: {
		title: "Free Energy Converter Online - No Signup | 30tools",
		description: "Free energy converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/energy-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Energy Converter Online - No Signup | 30tools",
		description: "Free energy converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/energy-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="energy" />
		</ToolLayout>
	);
}
