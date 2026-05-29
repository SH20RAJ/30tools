import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Percentage Calculator Online - No Signup | 30tools",
	description: "Free percentage calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "percentage calculator, calculate percentage, percent calculator, online calculator, free math tool, 30tools, percentage-calculator, free percentage-calculator, percentage calculator online, online utility, free converter, browser tool",
	alternates: {
		canonical: "https://30tools.com/percentage-calculator",
	},
	openGraph: {
		title: "Free Percentage Calculator Online - No Signup | 30tools",
		description: "Free percentage calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/percentage-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Percentage Calculator Online - No Signup | 30tools",
		description: "Free percentage calculator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/percentage-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="percentage-calculator" />
		</ToolLayout>
	);
}
