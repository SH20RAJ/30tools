import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RgbHexConverter from "@/components/tools/built-ins/RgbHexConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Color Converter Online - No Signup | 30tools",
	description: "Transform color codes between HEX, RGB, HSL, and CMYK formats instantly. Our free online tool helps designers and developers manage color schemes with...",
	keywords: "color converter, free online tool, no signup, color-converter, free color-converter, Color Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/color-converter",
	},
	openGraph: {
		title: "Free Color Converter Online - No Signup | 30tools",
		description: "Transform color codes between HEX, RGB, HSL, and CMYK formats instantly. Our free online tool helps designers and developers manage color schemes with...",
		url: "https://30tools.com/color-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Color Converter Online - No Signup | 30tools",
		description: "Transform color codes between HEX, RGB, HSL, and CMYK formats instantly. Our free online tool helps designers and developers manage color schemes with...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/color-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RgbHexConverter mode="color" />
		</ToolLayout>
	);
}
