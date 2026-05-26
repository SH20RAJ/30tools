import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Pace Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Pace Converter online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
	keywords: "pace converter, free online tool, no signup, pace-converter, free pace-converter, Pace Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/pace-converter",
	},
	openGraph: {
		title: "Free Pace Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Pace Converter online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		url: "https://30tools.com/pace-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pace Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Pace Converter online. Fast, secure browser-based utility with no registration. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pace-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="pace" />
		</ToolLayout>
	);
}
