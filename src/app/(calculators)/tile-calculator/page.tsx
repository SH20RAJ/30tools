import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ConstructionCalculator from "@/components/tools/calculators/ConstructionCalculator";

export const metadata = {
	title: "Free Tile Calculator Online - No Signup | 30tools",
	description: "Calculate the total number of floor or wall tiles needed for a room, including waste margins and cost estimates.",
	keywords: "tile-calculator, Tile Calculator, flooring tiles estimator, tiles needed for room, floor area calculator, 30tools",
	alternates: {
		canonical: "https://30tools.com/tile-calculator",
	},
	openGraph: {
		title: "Free Tile Calculator Online - No Signup | 30tools",
		description: "Calculate the total number of floor or wall tiles needed for a room, including waste margins and cost estimates.",
		url: "https://30tools.com/tile-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Tile Calculator Online - No Signup | 30tools",
		description: "Calculate the total number of floor or wall tiles needed for a room, including waste margins and cost estimates.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tile-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ConstructionCalculator defaultTab="tile" />
		</ToolLayout>
	);
}
