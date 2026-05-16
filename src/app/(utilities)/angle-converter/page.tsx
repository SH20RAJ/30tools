import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Angle Converter Online – Fast & No Signup | 30tools",
	description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
	keywords: "angle converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/angle-converter",
	},
	openGraph: {
		title: "Free Angle Converter Online – Fast & No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
		url: "https://30tools.com/angle-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Angle Converter Online – Fast & No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
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
			<UniversalUnitConverter />
		</ToolLayout>
	);
}
