import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Complete SEO Audit Tool online. Optimize search presence with no signup. 100% free.",
	keywords: "seo audit tool, website audit, seo checker, on-page seo analysis, site audit, free seo tool, 30tools, seo-audit-tool, free seo-audit-tool, seo audit tool online, seo tool, website analyzer",
	alternates: {
		canonical: "https://30tools.com/seo-audit-tool",
	},
	openGraph: {
		title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Complete SEO Audit Tool online. Optimize search presence with no signup. 100% free.",
		url: "https://30tools.com/seo-audit-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Complete SEO Audit Tool Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Complete SEO Audit Tool online. Optimize search presence with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/seo-audit-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="seo-audit-tool" />
		</ToolLayout>
	);
}
