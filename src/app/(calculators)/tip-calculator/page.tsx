import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Tip Calculator - Split the Bill | 30tools",
	description: "Calculate the tip, total, and amount per person for any bill. Quick gratuity and bill-splitting calculator, free and no signup.",
	keywords: "tip calculator, gratuity calculator, bill split calculator, restaurant tip calculator, split the bill",
	alternates: {
		canonical: "https://30tools.com/tip-calculator",
	},
	openGraph: {
		title: "Tip Calculator - Split the Bill | 30tools",
		description: "Calculate the tip, total, and amount per person for any bill. Quick gratuity and bill-splitting calculator, free and no signup.",
		url: "https://30tools.com/tip-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tip Calculator - Split the Bill | 30tools",
		description: "Calculate the tip, total, and amount per person for any bill. Quick gratuity and bill-splitting calculator, free and no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/tip-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="tip-calculator" />
		</ToolLayout>
	);
}
