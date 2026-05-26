import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RomanNumeralTool from "@/components/tools/built-ins/RomanNumeralTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Number to Roman Numerals Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Number to Roman Numerals online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "number to roman numerals, free online tool, no signup, number-to-roman-numerals, free number-to-roman-numerals, Number To Roman Numerals online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/number-to-roman-numerals",
	},
	openGraph: {
		title: "Free Number to Roman Numerals Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Number to Roman Numerals online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/number-to-roman-numerals",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Number to Roman Numerals Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Number to Roman Numerals online. Fast, secure browser-based utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/number-to-roman-numerals");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RomanNumeralTool />
		</ToolLayout>
	);
}
