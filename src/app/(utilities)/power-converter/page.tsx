import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Power Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Power Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
	keywords: "power converter, free online tool, no signup, power-converter, free power-converter, Power Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/power-converter",
	},
	openGraph: {
		title: "Free Power Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Power Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
		url: "https://30tools.com/power-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Power Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Power Converter online. Fast, secure browser-based utility with no registration. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/power-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="power" />
		</ToolLayout>
	);
}
