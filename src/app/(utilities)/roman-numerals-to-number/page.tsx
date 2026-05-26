import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RomanNumeralTool from "@/components/tools/built-ins/RomanNumeralTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Roman Numerals to Number Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Roman Numerals to Number online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "roman numerals to number, free online tool, no signup, roman-numerals-to-number, free roman-numerals-to-number, Roman Numerals To Number online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/roman-numerals-to-number",
	},
	openGraph: {
		title: "Free Roman Numerals to Number Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Roman Numerals to Number online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/roman-numerals-to-number",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Roman Numerals to Number Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Roman Numerals to Number online. Fast, secure browser-based utility with no registration. Try it free now.",
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
