import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
	description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
	keywords: "binary to decimal converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/binary-to-decimal-converter",
	},
	openGraph: {
		title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-decimal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to Decimal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to decimal (Base-10) instantly. Our free online converter helps you with computer science calculations and binary data analysis in seconds. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/binary-to-decimal-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
