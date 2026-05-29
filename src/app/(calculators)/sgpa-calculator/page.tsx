import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import AcademicGradesCalculator from "@/components/tools/calculators/AcademicGradesCalculator";

export const metadata = {
	title: "Free SGPA Calculator Online - No Signup | 30tools",
	description: "Compute your Semester Grade Point Average (SGPA) based on course credits and grade points earned.",
	keywords: "sgpa-calculator, SGPA Calculator, calculate sgpa, credit point calculator, semester grade calculator, 30tools",
	alternates: {
		canonical: "https://30tools.com/sgpa-calculator",
	},
	openGraph: {
		title: "Free SGPA Calculator Online - No Signup | 30tools",
		description: "Compute your Semester Grade Point Average (SGPA) based on course credits and grade points earned.",
		url: "https://30tools.com/sgpa-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SGPA Calculator Online - No Signup | 30tools",
		description: "Compute your Semester Grade Point Average (SGPA) based on course credits and grade points earned.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/sgpa-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AcademicGradesCalculator defaultTab="sgpa" />
		</ToolLayout>
	);
}
