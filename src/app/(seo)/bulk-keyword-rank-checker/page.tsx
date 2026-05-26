import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Bulk Keyword Rank Checker Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Bulk Keyword Rank Checker online. Optimize search presence with no signup.",
	keywords: "bulk keyword rank checker, free online tool, no signup, bulk-keyword-rank-checker, free bulk-keyword-rank-checker, Bulk Keyword Rank Checker online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/bulk-keyword-rank-checker",
	},
	openGraph: {
		title: "Free Bulk Keyword Rank Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Bulk Keyword Rank Checker online. Optimize search presence with no signup.",
		url: "https://30tools.com/bulk-keyword-rank-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Bulk Keyword Rank Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Bulk Keyword Rank Checker online. Optimize search presence with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/bulk-keyword-rank-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="bulk-keyword-rank-checker" />
		</ToolLayout>
	);
}
