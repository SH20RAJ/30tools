import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KeywordTool from "@/components/tools/seo/KeywordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Keywords Suggestion Tool Online - No Signup, Instant Audit | 30tools",
	description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "keywords suggestion tool, free online tool, no signup, keywords-suggestion-tool, free keywords-suggestion-tool, Keywords Suggestion Tool online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/keywords-suggestion-tool",
	},
	openGraph: {
		title: "Free Keywords Suggestion Tool Online - No Signup, Instant Audit | 30tools",
		description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keywords-suggestion-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Keywords Suggestion Tool Online - No Signup, Instant Audit | 30tools",
		description: "Free keywords suggestion tool tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/keywords-suggestion-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KeywordTool />
		</ToolLayout>
	);
}
