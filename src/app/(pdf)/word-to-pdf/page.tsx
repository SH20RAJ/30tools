import ToolLayout from "@/components/tools/shared/ToolLayout";
import WordToPDF from "@/components/tools/pdf/WordToPDF";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Word to PDF Online - No Signup, Secure Local | 30tools",
	description: "Convert Word documents (.docx) to PDF format 100% free. Fast, high-quality, and privacy-focused conversion with no signup required.",
	keywords: "word to pdf, convert word to pdf, docx to pdf, free word converter, online pdf tool, 30tools, word-to-pdf, free word-to-pdf, word to pdf online, pdf utility, document editor, free pdf converter",
	alternates: {
		canonical: "https://30tools.com/word-to-pdf",
	},
	openGraph: {
		title: "Free Word to PDF Online - No Signup, Secure Local | 30tools",
		description: "Convert Word documents (.docx) to PDF format 100% free. Fast, high-quality, and privacy-focused conversion with no signup required.",
		url: "https://30tools.com/word-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word to PDF Online - No Signup, Secure Local | 30tools",
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
			<ToolLayout tool={tool}>
				<WordToPDF />
			</ToolLayout>
		</>
	);
}

