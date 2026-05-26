import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import AcademicGradesCalculator from "@/components/tools/calculators/AcademicGradesCalculator";

export const metadata = {
	title: "Free Required Marks Calculator Online - No Signup | 30tools",
	description: "Compute rates, taxes, averages, and conversions with our free Required Marks Calculator online. Quick, accurate browser calculator with no registration.",
	keywords: "required-marks-calculator, Required Marks Calculator, target grade calculator, marks needed in final, 30tools",
	alternates: {
		canonical: "https://30tools.com/required-marks-calculator",
	},
	openGraph: {
		title: "Free Required Marks Calculator Online - No Signup | 30tools",
		description: "Compute rates, taxes, averages, and conversions with our free Required Marks Calculator online. Quick, accurate browser calculator with no registration.",
		url: "https://30tools.com/required-marks-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Required Marks Calculator Online - No Signup | 30tools",
		description: "Compute rates, taxes, averages, and conversions with our free Required Marks Calculator online. Quick, accurate browser calculator with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/required-marks-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AcademicGradesCalculator defaultTab="req-marks" />
		</ToolLayout>
	);
}
