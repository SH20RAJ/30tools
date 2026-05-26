import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import PhotoNameDateEditor from "@/components/tools/exam/PhotoNameDateEditor";

export const metadata = {
	title: "Free Photo With Name and Date Editor Online - No Signup | 30tools",
	description: "Resize and compress files with our free Photo With Name and Date Editor online. Safe and private browser utility for government exam portal applications.",
	keywords: "photo-name-date-editor, Photo Name Date Editor, photo with name and date, name date photo maker, 30tools",
	alternates: {
		canonical: "https://30tools.com/photo-name-date-editor",
	},
	openGraph: {
		title: "Free Photo With Name and Date Editor Online - No Signup | 30tools",
		description: "Resize and compress files with our free Photo With Name and Date Editor online. Safe and private browser utility for government exam portal applications.",
		url: "https://30tools.com/photo-name-date-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Photo With Name and Date Editor Online - No Signup | 30tools",
		description: "Resize and compress files with our free Photo With Name and Date Editor online. Safe and private browser utility for government exam portal applications.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/photo-name-date-editor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PhotoNameDateEditor />
		</ToolLayout>
	);
}
