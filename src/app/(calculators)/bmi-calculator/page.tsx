import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInCalculators from "@/components/tools/built-ins/BuiltInCalculators";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "BMI Calculator - Body Mass Index | 30tools",
	description: "Calculate your Body Mass Index from height and weight and see your BMI category. Free, private BMI calculator that runs in your browser.",
	keywords: "bmi calculator, body mass index calculator, bmi chart, healthy weight calculator, calculate bmi",
	alternates: {
		canonical: "https://30tools.com/bmi-calculator",
	},
	openGraph: {
		title: "BMI Calculator - Body Mass Index | 30tools",
		description: "Calculate your Body Mass Index from height and weight and see your BMI category. Free, private BMI calculator that runs in your browser.",
		url: "https://30tools.com/bmi-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "BMI Calculator - Body Mass Index | 30tools",
		description: "Calculate your Body Mass Index from height and weight and see your BMI category. Free, private BMI calculator that runs in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/bmi-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInCalculators kind="bmi-calculator" />
		</ToolLayout>
	);
}
