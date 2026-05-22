import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HEX to Text Converter Online - No Signup, Client-Side | 30tools",
	description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
	keywords: "hex to text converter, free online tool, no signup, hex-to-text-converter, free hex-to-text-converter, Hex To Text Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-text-converter",
	},
	openGraph: {
		title: "Free HEX to Text Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Text Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hex-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="hex-to-text" />
		</ToolLayout>
	);
}
