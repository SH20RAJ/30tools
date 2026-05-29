import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "ROI Calculator - Return on Investment | 30tools",
	description: "Calculate return on investment, net gain, and annualized ROI from your initial and final values. Free investment return calculator.",
	keywords: "roi calculator, return on investment calculator, annualized return calculator, investment return, profit percentage calculator",
	alternates: {
		canonical: "https://30tools.com/roi-calculator",
	},
	openGraph: {
		title: "ROI Calculator - Return on Investment | 30tools",
		description: "Calculate return on investment, net gain, and annualized ROI from your initial and final values. Free investment return calculator.",
		url: "https://30tools.com/roi-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ROI Calculator - Return on Investment | 30tools",
		description: "Calculate return on investment, net gain, and annualized ROI from your initial and final values. Free investment return calculator.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/roi-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="roi-calculator" />
		</ToolLayout>
	);
}
