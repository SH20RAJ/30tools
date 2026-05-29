import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RgbHexConverter from "@/components/tools/built-ins/RgbHexConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free RGB to HEX Converter Online - No Signup | 30tools",
	description: "Free rgb to hex converter tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "rgb to hex converter, free online tool, no signup, rgb-to-hex-converter, free rgb-to-hex-converter, Rgb To Hex Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/rgb-to-hex-converter",
	},
	openGraph: {
		title: "Free RGB to HEX Converter Online - No Signup | 30tools",
		description: "Free rgb to hex converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/rgb-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free RGB to HEX Converter Online - No Signup | 30tools",
		description: "Free rgb to hex converter tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/rgb-to-hex-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RgbHexConverter mode="rgb-hex" />
		</ToolLayout>
	);
}
