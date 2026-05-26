import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free SSC Photo Resizer Online - No Signup | 30tools",
	description: "Resize and compress files with our free SSC Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
	keywords: "ssc-photo-resizer, SSC Photo Resizer, ssc photo resizer online, ssc photo size, ssc signature resizer, ssc image compressor, ssc forms, 30tools",
	alternates: {
		canonical: "https://30tools.com/ssc-photo-resizer",
	},
	openGraph: {
		title: "Free SSC Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free SSC Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		url: "https://30tools.com/ssc-photo-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SSC Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free SSC Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ssc-photo-resizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer examName="SSC" />
		</ToolLayout>
	);
}
