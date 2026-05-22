import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
	description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
	keywords: "article rewriter, free online tool, no signup, article-rewriter, free article-rewriter, Article Rewriter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/article-rewriter",
	},
	openGraph: {
		title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
		description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/article-rewriter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Article Rewriter Online – Fast & No Signup | 30tools",
		description: "Paraphrase and rewrite articles instantly with our free online Article Rewriter. Improve readability, change tone, and create unique content variations for blogs and SEO. 100% free and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/article-rewriter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LineSorterTool />
		</ToolLayout>
	);
}
