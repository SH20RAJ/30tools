import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Illuminance Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Illuminance Converter online. Fast, secure browser-based utility with no registration. No signup required.",
	keywords: "illuminance converter, free online tool, no signup, illuminance-converter, free illuminance-converter, Illuminance Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/illuminance-converter",
	},
	openGraph: {
		title: "Free Illuminance Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Illuminance Converter online. Fast, secure browser-based utility with no registration. No signup required.",
		url: "https://30tools.com/illuminance-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Illuminance Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Illuminance Converter online. Fast, secure browser-based utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/illuminance-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="illuminance" />
		</ToolLayout>
	);
}
