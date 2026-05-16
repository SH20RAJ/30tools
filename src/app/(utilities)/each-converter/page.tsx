import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Each Converter Online – Fast & No Signup | 30tools",
	description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "each converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/each-converter",
	},
	openGraph: {
		title: "Free Each Converter Online – Fast & No Signup | 30tools",
		description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/each-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Each Converter Online – Fast & No Signup | 30tools",
		description: "Free each converter tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/each-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter />
		</ToolLayout>
	);
}
