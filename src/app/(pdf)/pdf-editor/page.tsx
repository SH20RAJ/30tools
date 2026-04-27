import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free PDF Editor Online – Fast & No Signup | 30tools",
	description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
	keywords: "pdf editor, free pdf editor, online pdf editor, no signup, 30tools, rotate pdf, delete pdf pages",
	alternates: {
		canonical: "https://30tools.com/pdf-editor",
	},
	openGraph: {
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
		url: "https://30tools.com/pdf-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("pdf-editor");

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolSEOLayout toolId={tool.id}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolSEOLayout>
		</>
	);
}
