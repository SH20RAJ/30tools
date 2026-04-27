import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image to PDF Online – Fast & No Signup | 30tools",
	description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
	keywords: "image to pdf, free image to pdf, online image to pdf, no signup, 30tools, jpg to pdf, png to pdf",
	alternates: {
		canonical: "https://30tools.com/image-to-pdf",
	},
	openGraph: {
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
		url: "https://30tools.com/image-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("image-to-pdf");

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

