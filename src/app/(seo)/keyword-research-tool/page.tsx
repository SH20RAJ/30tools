import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KeywordTool from "@/components/tools/seo/KeywordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Advanced Keyword Research Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Keyword Research online. Optimize search presence with no signup.",
	keywords: "keyword research tool, seo keyword finder, search keywords, keyword analysis, free seo tool, 30tools, keyword-research-tool, free keyword-research-tool, keyword research tool online, seo tool, website analyzer, online seo checker",
	alternates: {
		canonical: "https://30tools.com/keyword-research-tool",
	},
	openGraph: {
		title: "Free Advanced Keyword Research Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Keyword Research online. Optimize search presence with no signup.",
		url: "https://30tools.com/keyword-research-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Keyword Research Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Keyword Research online. Optimize search presence with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/keyword-research-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KeywordTool />
		</ToolLayout>
	);
}
