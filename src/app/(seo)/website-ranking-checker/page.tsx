import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import WebsiteRankingCheckerTool from "@/components/tools/seo/WebsiteRankingCheckerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
	description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "website ranking checker, free online tool, no signup, website-ranking-checker, free website-ranking-checker, Website Ranking Checker online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/website-ranking-checker",
	},
	openGraph: {
		title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
		description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/website-ranking-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Website Ranking Checker Online – Fast & No Signup | 30tools",
		description: "Free website ranking checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/website-ranking-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<WebsiteRankingCheckerTool />
		</ToolLayout>
	);
}
