import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Break-Even Calculator - Units & Revenue | 30tools",
	description: "Calculate the break-even point in units and revenue from fixed costs, variable cost per unit, and selling price. Free business calculator.",
	keywords: "break even calculator, break even point, break even analysis, break even units, cost volume profit calculator",
	alternates: {
		canonical: "https://30tools.com/break-even-calculator",
	},
	openGraph: {
		title: "Break-Even Calculator - Units & Revenue | 30tools",
		description: "Calculate the break-even point in units and revenue from fixed costs, variable cost per unit, and selling price. Free business calculator.",
		url: "https://30tools.com/break-even-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Break-Even Calculator - Units & Revenue | 30tools",
		description: "Calculate the break-even point in units and revenue from fixed costs, variable cost per unit, and selling price. Free business calculator.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/break-even-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="break-even-calculator" />
		</ToolLayout>
	);
}
