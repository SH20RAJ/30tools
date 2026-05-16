import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RomanNumeralTool from "@/components/tools/built-ins/RomanNumeralTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
	description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "roman numerals to number, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/roman-numerals-to-number",
	},
	openGraph: {
		title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
		description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/roman-numerals-to-number",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Roman Numerals to Number Online – Fast & No Signup | 30tools",
		description: "Free roman numerals to number tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/roman-numerals-to-number");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RomanNumeralTool />
		</ToolLayout>
	);
}
