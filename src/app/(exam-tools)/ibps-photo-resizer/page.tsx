import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free IBPS Photo Resizer Online - No Signup | 30tools",
	description: "Resize and compress files with our free IBPS Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
	keywords: "ibps-photo-resizer, IBPS Photo Resizer, ibps photo resizer online, ibps photo compressor, ibps signature resize, 30tools",
	alternates: {
		canonical: "https://30tools.com/ibps-photo-resizer",
	},
	openGraph: {
		title: "Free IBPS Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free IBPS Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		url: "https://30tools.com/ibps-photo-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IBPS Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free IBPS Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ibps-photo-resizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer examName="IBPS" />
		</ToolLayout>
	);
}
