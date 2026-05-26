import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Weight Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Weight Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
	keywords: "weight converter, free online tool, no signup, weight-converter, free weight-converter, Weight Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/weight-converter",
	},
	openGraph: {
		title: "Free Weight Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Weight Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
		url: "https://30tools.com/weight-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Weight Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Weight Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/weight-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="mass" />
		</ToolLayout>
	);
}
