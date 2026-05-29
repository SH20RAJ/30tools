import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LegalTemplateGenerator from "@/components/tools/built-ins/LegalTemplateGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Terms And Condition Generator Online - No Signup | 30tools",
	description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "terms and condition generator, free online tool, no signup, terms-and-condition-generator, free terms-and-condition-generator, Terms And Condition Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/terms-and-condition-generator",
	},
	openGraph: {
		title: "Free Terms And Condition Generator Online - No Signup | 30tools",
		description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/terms-and-condition-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terms And Condition Generator Online - No Signup | 30tools",
		description: "Free terms and condition generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/terms-and-condition-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LegalTemplateGenerator />
		</ToolLayout>
	);
}
