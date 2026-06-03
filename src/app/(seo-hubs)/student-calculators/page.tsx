import type { Metadata } from "next";
import SeoHubPage from "@/components/seo/SeoHubPage";

export const metadata: Metadata = {
	title: "Student Calculators - Attendance, SGPA, CGPA and Marks | 30tools",
	description: "Free student calculators for 75% attendance, how many classes you can miss, SGPA, CGPA, CGPA to percentage, and required final marks.",
	alternates: { canonical: "https://30tools.com/student-calculators" },
};

export default function StudentCalculatorsHub() {
	return (
		<SeoHubPage
			title="Student Calculators"
			description="Practical calculators for attendance shortage, grade planning, CGPA conversion, and final exam marks. Useful for college and engineering students."
			route="/student-calculators"
			categoryNames={["Student Calculators"]}
			guideTitle="Student Calculator Strategy"
			guidePoints={[
				"Use natural-language pages for questions like how many classes can I miss.",
				"Keep grade pages clear about formula assumptions and university-specific differences.",
				"Link attendance, SGPA, CGPA, and required marks calculators together as a study-planning cluster.",
				"Treat all outputs as planning estimates unless they match the official university formula.",
			]}
			faqs={[
				{ question: "Can I use these for official submissions?", answer: "Use them for planning and checking. For official forms, follow your institution's published formula." },
				{ question: "Why target student calculators?", answer: "They have clear intent, lower competition than generic calculators, and useful repeat visits." },
				{ question: "Do the calculators require signup?", answer: "No. The basic calculators are free and work in the browser." },
			]}
		/>
	);
}
