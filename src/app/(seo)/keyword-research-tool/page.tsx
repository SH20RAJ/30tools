import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KeywordTool from "@/components/tools/seo/KeywordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
	description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
	keywords: "advanced keyword research, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/keyword-research-tool",
	},
	openGraph: {
		title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
		description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keyword-research-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Keyword Research Online – Fast & No Signup | 30tools",
		description: "Comprehensive keyword research tool with search volume, difficulty, CPC data, and keyword suggestions. Find profitable keywords for SEO. 100% free, fast, and no signup required.",
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
