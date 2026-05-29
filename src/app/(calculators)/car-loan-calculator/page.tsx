import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Car Loan Calculator - Auto Payment Estimator | 30tools",
	description: "Work out your monthly car payment and total interest from vehicle price, down payment, trade-in, APR, and term. Free auto loan calculator.",
	keywords: "car loan calculator, auto loan calculator, car payment calculator, vehicle finance calculator, monthly car payment",
	alternates: {
		canonical: "https://30tools.com/car-loan-calculator",
	},
	openGraph: {
		title: "Car Loan Calculator - Auto Payment Estimator | 30tools",
		description: "Work out your monthly car payment and total interest from vehicle price, down payment, trade-in, APR, and term. Free auto loan calculator.",
		url: "https://30tools.com/car-loan-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Car Loan Calculator - Auto Payment Estimator | 30tools",
		description: "Work out your monthly car payment and total interest from vehicle price, down payment, trade-in, APR, and term. Free auto loan calculator.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/car-loan-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="car-loan-calculator" />
		</ToolLayout>
	);
}
