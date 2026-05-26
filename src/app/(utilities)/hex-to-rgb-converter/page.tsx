import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RgbHexConverter from "@/components/tools/built-ins/RgbHexConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HEX to RGB Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free HEX to RGB Converter online. Fast, secure browser-based utility with no registration. No signup required.",
	keywords: "hex to rgb converter, free online tool, no signup, hex-to-rgb-converter, free hex-to-rgb-converter, Hex To Rgb Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-rgb-converter",
	},
	openGraph: {
		title: "Free HEX to RGB Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free HEX to RGB Converter online. Fast, secure browser-based utility with no registration. No signup required.",
		url: "https://30tools.com/hex-to-rgb-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to RGB Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free HEX to RGB Converter online. Fast, secure browser-based utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hex-to-rgb-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RgbHexConverter mode="hex-rgb" />
		</ToolLayout>
	);
}
