import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Angle Converter Online - No Signup | 30tools",
	description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians...",
	keywords: "angle converter, free online tool, no signup, angle-converter, free angle-converter, Angle Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/angle-converter",
	},
	openGraph: {
		title: "Free Angle Converter Online - No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians...",
		url: "https://30tools.com/angle-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Angle Converter Online - No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/angle-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="angle" />
		</ToolLayout>
	);
}
