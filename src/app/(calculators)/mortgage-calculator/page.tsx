import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Mortgage Calculator - Monthly Payment & Interest | 30tools",
	description: "Estimate your monthly mortgage payment, total interest, and total cost from home price, down payment, rate, and term. Free, no signup.",
	keywords: "mortgage calculator, monthly mortgage payment, home loan calculator, mortgage interest calculator, house payment calculator",
	alternates: {
		canonical: "https://30tools.com/mortgage-calculator",
	},
	openGraph: {
		title: "Mortgage Calculator - Monthly Payment & Interest | 30tools",
		description: "Estimate your monthly mortgage payment, total interest, and total cost from home price, down payment, rate, and term. Free, no signup.",
		url: "https://30tools.com/mortgage-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mortgage Calculator - Monthly Payment & Interest | 30tools",
		description: "Estimate your monthly mortgage payment, total interest, and total cost from home price, down payment, rate, and term. Free, no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/mortgage-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="mortgage-calculator" />
		</ToolLayout>
	);
}
