import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import FaqSchemaGenerator from "@/components/tools/built-ins/FaqSchemaGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free FAQ Schema Generator Online - No Signup | 30tools",
	description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "faq schema generator, free online tool, no signup, faq-schema-generator, free faq-schema-generator, Faq Schema Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/faq-schema-generator",
	},
	openGraph: {
		title: "Free FAQ Schema Generator Online - No Signup | 30tools",
		description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/faq-schema-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free FAQ Schema Generator Online - No Signup | 30tools",
		description: "Free faq schema generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/faq-schema-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<FaqSchemaGenerator />
		</ToolLayout>
	);
}
