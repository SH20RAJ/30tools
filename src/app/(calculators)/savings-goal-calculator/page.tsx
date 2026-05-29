import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Savings Goal Calculator - Monthly Deposit Planner | 30tools",
	description: "Find the monthly deposit needed to reach a savings goal by a target date, including interest. Free savings planning calculator.",
	keywords: "savings goal calculator, monthly savings calculator, savings target planner, how much to save calculator, savings plan calculator",
	alternates: {
		canonical: "https://30tools.com/savings-goal-calculator",
	},
	openGraph: {
		title: "Savings Goal Calculator - Monthly Deposit Planner | 30tools",
		description: "Find the monthly deposit needed to reach a savings goal by a target date, including interest. Free savings planning calculator.",
		url: "https://30tools.com/savings-goal-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Savings Goal Calculator - Monthly Deposit Planner | 30tools",
		description: "Find the monthly deposit needed to reach a savings goal by a target date, including interest. Free savings planning calculator.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/savings-goal-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="savings-goal-calculator" />
		</ToolLayout>
	);
}
