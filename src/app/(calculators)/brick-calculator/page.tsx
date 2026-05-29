import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ConstructionCalculator from "@/components/tools/calculators/ConstructionCalculator";

export const metadata = {
	title: "Free Brick Calculator Online - No Signup | 30tools",
	description: "Calculate the total number of bricks, cement bags, and sand volume required for building a wall.",
	keywords: "brick-calculator, Brick Calculator, bricks needed for wall, cement sand calculator, construction calculator, 30tools",
	alternates: {
		canonical: "https://30tools.com/brick-calculator",
	},
	openGraph: {
		title: "Free Brick Calculator Online - No Signup | 30tools",
		description: "Calculate the total number of bricks, cement bags, and sand volume required for building a wall.",
		url: "https://30tools.com/brick-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Brick Calculator Online - No Signup | 30tools",
		description: "Calculate the total number of bricks, cement bags, and sand volume required for building a wall.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/brick-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ConstructionCalculator defaultTab="brick" />
		</ToolLayout>
	);
}
