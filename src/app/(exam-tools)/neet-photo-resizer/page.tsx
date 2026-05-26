import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ExamPhotoResizer from "@/components/tools/exam/ExamPhotoResizer";

export const metadata = {
	title: "Free NEET Photo Resizer Online - No Signup | 30tools",
	description: "Resize and compress files with our free NEET Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
	keywords: "neet-photo-resizer, NEET Photo Resizer, neet photo resizer online, neet postcard resizer, neet signature size, nta neet photo, 30tools",
	alternates: {
		canonical: "https://30tools.com/neet-photo-resizer",
	},
	openGraph: {
		title: "Free NEET Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free NEET Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		url: "https://30tools.com/neet-photo-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free NEET Photo Resizer Online - No Signup | 30tools",
		description: "Resize and compress files with our free NEET Photo Resizer online. Safe and private browser utility for government exam portal applications. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/neet-photo-resizer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ExamPhotoResizer examName="NEET" />
		</ToolLayout>
	);
}
