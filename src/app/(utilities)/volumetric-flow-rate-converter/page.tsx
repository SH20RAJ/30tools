import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Volumetric Flow Rate Converter online. Fast, secure browser-based utility with no registration. 100% free.",
	keywords: "volumetric flow rate converter, free online tool, no signup, volumetric-flow-rate-converter, free volumetric-flow-rate-converter, Volumetric Flow Rate Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/volumetric-flow-rate-converter",
	},
	openGraph: {
		title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Volumetric Flow Rate Converter online. Fast, secure browser-based utility with no registration. 100% free.",
		url: "https://30tools.com/volumetric-flow-rate-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Volumetric Flow Rate Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Volumetric Flow Rate Converter online. Fast, secure browser-based utility with no registration. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/volumetric-flow-rate-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="flowVolume" />
		</ToolLayout>
	);
}
