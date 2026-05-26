import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Article Rewriter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Article Rewriter online. Fast and private browser utility with no signup. Try it free now.",
	keywords: "article rewriter, free online tool, no signup, article-rewriter, free article-rewriter, Article Rewriter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/article-rewriter",
	},
	openGraph: {
		title: "Free Article Rewriter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Article Rewriter online. Fast and private browser utility with no signup. Try it free now.",
		url: "https://30tools.com/article-rewriter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Article Rewriter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Article Rewriter online. Fast and private browser utility with no signup. Try it free now.",
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
