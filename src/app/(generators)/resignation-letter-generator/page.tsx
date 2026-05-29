import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import ResignationLetterGenerator from "@/components/tools/generators/ResignationLetterGenerator";

export const metadata = {
	title: "Free Resignation Letter Generator Online - No Signup | 30tools",
	description: "Generate professional resignation letters in seconds. Choose between formal, polite, or short-notice templates and print or download instantly.",
	keywords: "resignation-letter-generator, Resignation Letter Generator",
	alternates: {
		canonical: "https://30tools.com/resignation-letter-generator",
	},
	openGraph: {
		title: "Free Resignation Letter Generator Online - No Signup | 30tools",
		description: "Generate professional resignation letters in seconds. Choose between formal, polite, or short-notice templates and print or download instantly.",
		url: "https://30tools.com/resignation-letter-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Resignation Letter Generator Online - No Signup | 30tools",
		description: "Generate professional resignation letters in seconds. Choose between formal, polite, or short-notice templates and print or download instantly.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/resignation-letter-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ResignationLetterGenerator />
		</ToolLayout>
	);
}
