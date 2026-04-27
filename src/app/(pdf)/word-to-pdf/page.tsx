import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import ToolSEOLayout from "@/components/seo/ToolSEOLayout";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Word to PDF Online – Fast & No Signup | 30tools",
	description: "Convert Word documents (.docx) to PDF format 100% free. Fast, high-quality, and privacy-focused conversion with no signup required.",
	keywords: "word to pdf, free word to pdf, online word to pdf, no signup, 30tools, docx to pdf, convert docx to pdf",
	alternates: {
		canonical: "https://30tools.com/word-to-pdf",
	},
	openGraph: {
		title: "Free Word to PDF Online – Fast & No Signup | 30tools",
		description: "Convert Word documents (.docx) to PDF format 100% free. Fast, high-quality, and privacy-focused conversion with no signup required.",
		url: "https://30tools.com/word-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word to PDF Online – Fast & No Signup | 30tools",
		description: "Convert Word documents (.docx) to PDF format 100% free. Fast, high-quality, and privacy-focused conversion with no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolById("word-to-pdf");

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

