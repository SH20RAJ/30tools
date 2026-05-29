import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Inflation Calculator - Buying Power Over Time | 30tools",
	description: "See how inflation changes the value of money over time, including future buying power and the nominal amount needed to keep pace. Free tool.",
	keywords: "inflation calculator, buying power calculator, future value of money, purchasing power calculator, inflation impact",
	alternates: {
		canonical: "https://30tools.com/inflation-calculator",
	},
	openGraph: {
		title: "Inflation Calculator - Buying Power Over Time | 30tools",
		description: "See how inflation changes the value of money over time, including future buying power and the nominal amount needed to keep pace. Free tool.",
		url: "https://30tools.com/inflation-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Inflation Calculator - Buying Power Over Time | 30tools",
		description: "See how inflation changes the value of money over time, including future buying power and the nominal amount needed to keep pace. Free tool.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/inflation-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="inflation-calculator" />
		</ToolLayout>
	);
}
