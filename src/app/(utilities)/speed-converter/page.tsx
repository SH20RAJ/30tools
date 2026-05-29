import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Speed Converter Online - No Signup | 30tools",
	description: "Free speed converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "speed converter, free online tool, no signup, speed-converter, free speed-converter, Speed Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/speed-converter",
	},
	openGraph: {
		title: "Free Speed Converter Online - No Signup | 30tools",
		description: "Free speed converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/speed-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Speed Converter Online - No Signup | 30tools",
		description: "Free speed converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/speed-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="speed" />
		</ToolLayout>
	);
}
