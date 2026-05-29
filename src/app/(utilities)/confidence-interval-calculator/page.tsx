import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
	description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in...",
	keywords: "confidence interval calculator, free online tool, no signup, confidence-interval-calculator, free confidence-interval-calculator, Confidence Interval Calculator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/confidence-interval-calculator",
	},
	openGraph: {
		title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
		description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in...",
		url: "https://30tools.com/confidence-interval-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Confidence Interval Calculator Online - No Signup | 30tools",
		description: "Calculate the confidence interval for your statistical data instantly. Our free online tool helps you understand data precision and margin of error in...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/confidence-interval-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="confidence-interval-calculator" />
		</ToolLayout>
	);
}
