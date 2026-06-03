import type { Metadata } from "next";
import SeoHubPage from "@/components/seo/SeoHubPage";

export const metadata: Metadata = {
	title: "Student Tools - Attendance, Grades and Study Utilities | 30tools",
	description: "Free student tools for attendance planning, SGPA, CGPA, CGPA to percentage, required marks, and exam image uploads.",
	alternates: { canonical: "https://30tools.com/student-tools" },
};

export default function StudentToolsHub() {
	return (
		<SeoHubPage
			title="Student Tools"
			description="A focused student utility hub for attendance planning, grade calculations, and form-upload tasks that students repeatedly search for during semesters and admissions."
			route="/student-tools"
			categoryNames={["Student Calculators", "Exam Image Tools"]}
			guideTitle="Student Tool Roadmap"
			guidePoints={[
				"Use attendance calculators before shortage notices become urgent.",
				"Use SGPA and CGPA calculators for planning, not official transcript replacement.",
				"Use exam image tools when admission or exam portals reject photos by KB size.",
				"Link from broad student pages into exact-use pages such as 75 Attendance Calculator and Compress Image to 20KB.",
			]}
			faqs={[
				{ question: "Which student tools should I use first?", answer: "Start with the 75 Attendance Calculator, SGPA Calculator, CGPA Calculator, and exact exam image tools for form uploads." },
				{ question: "Are the calculators official?", answer: "No. They are planning tools. Use your college or exam body's official formula for final submissions." },
				{ question: "Why include exam image tools in student tools?", answer: "Students often need both academic calculators and upload-ready photos/signatures during exam and admission windows." },
			]}
		/>
	);
}
