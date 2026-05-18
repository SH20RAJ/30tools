import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
	keywords: "hex to octal converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/hex-to-octal-converter",
	},
	openGraph: {
		title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal values to octal format instantly. Our free online converter helps with computer science base transformations and data processing in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hex-to-octal-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="hex-to-octal" />
		</ToolLayout>
	);
}
