import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free Railway Exam Photo Resizer Online - No Signup | 30tools",
	description: "Resize and compress files with our free Railway Exam Photo Resizer online. Safe and private browser utility for government exam portal applications. 100% free.",
	keywords: "railway-exam-photo-resizer, Railway Exam Photo Resizer, rrb photo resizer, railway signature resizer, rrb photo size, 30tools",
	alternates: {
		canonical: "https://30tools.com/railway-exam-photo-resizer",
	},
	openGraph: {
		title: "Free Railway Exam Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free Railway Exam Photo Resizer online. Safe and private browser utility for government exam portal applications. 100% free.",
		url: "https://30tools.com/railway-exam-photo-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Railway Exam Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free Railway Exam Photo Resizer online. Safe and private browser utility for government exam portal applications. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/railway-exam-photo-resizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer examName="Railway" />
		</ToolLayout>
	);
}
