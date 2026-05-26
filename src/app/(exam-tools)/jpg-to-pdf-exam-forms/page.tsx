import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import JpgToPdfExam from "@/components/tools/exam/JpgToPdfExam";

export const metadata = {
	title: "Free JPG to PDF for Exam Forms Online - No Signup | 30tools",
	description: "Resize and compress files with our free JPG to PDF for Exam Forms online. Safe and private browser utility for government exam portal applications. Easy to use.",
	keywords: "jpg-to-pdf-exam-forms, JPG to PDF for Exam Forms, convert jpg to pdf for exam, image to pdf exam forms, pdf creator, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-pdf-exam-forms",
	},
	openGraph: {
		title: "Free JPG to PDF for Exam Forms Online - No Signup | 30tools",
		description: "Resize and compress files with our free JPG to PDF for Exam Forms online. Safe and private browser utility for government exam portal applications. Easy to use.",
		url: "https://30tools.com/jpg-to-pdf-exam-forms",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to PDF for Exam Forms Online - No Signup | 30tools",
		description: "Resize and compress files with our free JPG to PDF for Exam Forms online. Safe and private browser utility for government exam portal applications. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/jpg-to-pdf-exam-forms");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JpgToPdfExam />
		</ToolLayout>
	);
}
