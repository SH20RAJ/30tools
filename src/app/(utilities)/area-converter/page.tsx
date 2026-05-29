import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Area Converter Online - No Signup | 30tools",
	description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design...",
	keywords: "area converter, free online tool, no signup, area-converter, free area-converter, Area Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/area-converter",
	},
	openGraph: {
		title: "Free Area Converter Online - No Signup | 30tools",
		description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design...",
		url: "https://30tools.com/area-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Area Converter Online - No Signup | 30tools",
		description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/area-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="area" />
		</ToolLayout>
	);
}
