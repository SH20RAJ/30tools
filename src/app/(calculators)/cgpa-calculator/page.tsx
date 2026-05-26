import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import AcademicGradesCalculator from "@/components/tools/calculators/AcademicGradesCalculator";

export const metadata = {
	title: "Free CGPA Calculator Online - No Signup | 30tools",
	description: "Compute rates, taxes, averages, and conversions with our free CGPA Calculator online. Quick, accurate browser calculator with no registration. Try it free now.",
	keywords: "cgpa-calculator, CGPA Calculator, calculate cgpa, semester cgpa calculator, cumulative grade point average, 30tools",
	alternates: {
		canonical: "https://30tools.com/cgpa-calculator",
	},
	openGraph: {
		title: "Free CGPA Calculator Online - No Signup | 30tools",
		description: "Compute rates, taxes, averages, and conversions with our free CGPA Calculator online. Quick, accurate browser calculator with no registration. Try it free now.",
		url: "https://30tools.com/cgpa-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CGPA Calculator Online - No Signup | 30tools",
		description: "Compute rates, taxes, averages, and conversions with our free CGPA Calculator online. Quick, accurate browser calculator with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/cgpa-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AcademicGradesCalculator defaultTab="cgpa" />
		</ToolLayout>
	);
}
