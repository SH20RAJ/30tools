import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import KeywordTool from "@/components/tools/seo/KeywordTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Keyword Density Checker Online - No Signup, Instant Audit | 30tools",
	description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "keyword density checker, free online tool, no signup, keyword-density-checker, free keyword-density-checker, Keyword Density Checker online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/keyword-density-checker",
	},
	openGraph: {
		title: "Free Keyword Density Checker Online - No Signup, Instant Audit | 30tools",
		description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/keyword-density-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Keyword Density Checker Online - No Signup, Instant Audit | 30tools",
		description: "Free keyword density checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/keyword-density-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<KeywordTool />
		</ToolLayout>
	);
}
