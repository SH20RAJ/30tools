import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Compound Interest Calculator - Free Online | 30tools",
	description: "Calculate compound interest and future value with regular contributions. See how your savings or investments grow over time, free and instant.",
	keywords: "compound interest calculator, future value calculator, investment growth calculator, savings interest calculator, compound interest formula",
	alternates: {
		canonical: "https://30tools.com/compound-interest-calculator",
	},
	openGraph: {
		title: "Compound Interest Calculator - Free Online | 30tools",
		description: "Calculate compound interest and future value with regular contributions. See how your savings or investments grow over time, free and instant.",
		url: "https://30tools.com/compound-interest-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Compound Interest Calculator - Free Online | 30tools",
		description: "Calculate compound interest and future value with regular contributions. See how your savings or investments grow over time, free and instant.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/compound-interest-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="compound-interest-calculator" />
		</ToolLayout>
	);
}
