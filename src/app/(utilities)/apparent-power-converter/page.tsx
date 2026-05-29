import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Apparent Power Converter Online - No Signup | 30tools",
	description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians.",
	keywords: "apparent power converter, free online tool, no signup, apparent-power-converter, free apparent-power-converter, Apparent Power Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/apparent-power-converter",
	},
	openGraph: {
		title: "Free Apparent Power Converter Online - No Signup | 30tools",
		description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians.",
		url: "https://30tools.com/apparent-power-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Apparent Power Converter Online - No Signup | 30tools",
		description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/apparent-power-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="apparentPower" />
		</ToolLayout>
	);
}
