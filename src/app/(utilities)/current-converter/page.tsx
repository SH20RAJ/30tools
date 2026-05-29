import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Current Converter Online - No Signup | 30tools",
	description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical...",
	keywords: "current converter, free online tool, no signup, current-converter, free current-converter, Current Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/current-converter",
	},
	openGraph: {
		title: "Free Current Converter Online - No Signup | 30tools",
		description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical...",
		url: "https://30tools.com/current-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Current Converter Online - No Signup | 30tools",
		description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/current-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="current" />
		</ToolLayout>
	);
}
