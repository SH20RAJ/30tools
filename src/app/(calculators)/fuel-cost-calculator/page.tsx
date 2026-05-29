import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Fuel Cost Calculator - Trip Fuel Estimator | 30tools",
	description: "Estimate the fuel needed and total cost for a trip from distance, fuel economy, and price per litre. Free trip fuel cost calculator.",
	keywords: "fuel cost calculator, trip fuel calculator, gas cost calculator, fuel consumption calculator, travel fuel cost",
	alternates: {
		canonical: "https://30tools.com/fuel-cost-calculator",
	},
	openGraph: {
		title: "Fuel Cost Calculator - Trip Fuel Estimator | 30tools",
		description: "Estimate the fuel needed and total cost for a trip from distance, fuel economy, and price per litre. Free trip fuel cost calculator.",
		url: "https://30tools.com/fuel-cost-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fuel Cost Calculator - Trip Fuel Estimator | 30tools",
		description: "Estimate the fuel needed and total cost for a trip from distance, fuel economy, and price per litre. Free trip fuel cost calculator.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/fuel-cost-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="fuel-cost-calculator" />
		</ToolLayout>
	);
}
