import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import AttendanceCalculator from "@/components/tools/calculators/AttendanceCalculator";

export const metadata = {
	title: "Free 75% Attendance Calculator Online - No Signup | 30tools",
	description: "Calculate how many classes you need to attend or can safely skip to maintain a minimum 75% attendance rate.",
	keywords: "75-attendance-calculator, 75 Attendance Calculator, attendance calculator, college attendance calculator, skip class calculator, 30tools",
	alternates: {
		canonical: "https://30tools.com/75-attendance-calculator",
	},
	openGraph: {
		title: "Free 75% Attendance Calculator Online - No Signup | 30tools",
		description: "Calculate how many classes you need to attend or can safely skip to maintain a minimum 75% attendance rate.",
		url: "https://30tools.com/75-attendance-calculator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free 75% Attendance Calculator Online - No Signup | 30tools",
		description: "Calculate how many classes you need to attend or can safely skip to maintain a minimum 75% attendance rate.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/75-attendance-calculator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AttendanceCalculator />
		</ToolLayout>
	);
}
