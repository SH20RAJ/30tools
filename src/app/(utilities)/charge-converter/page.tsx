import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Charge Converter Online - No Signup | 30tools",
	description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base...",
	keywords: "charge converter, free online tool, no signup, charge-converter, free charge-converter, Charge Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/charge-converter",
	},
	openGraph: {
		title: "Free Charge Converter Online - No Signup | 30tools",
		description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base...",
		url: "https://30tools.com/charge-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Charge Converter Online - No Signup | 30tools",
		description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/charge-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="charge" />
		</ToolLayout>
	);
}
