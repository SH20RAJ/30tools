import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
	description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
	keywords: "complete seo audit tool, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/seo-audit-tool",
	},
	openGraph: {
		title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
		description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/seo-audit-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Complete SEO Audit Tool Online – Fast & No Signup | 30tools",
		description: "Comprehensive SEO audit tool that analyzes technical SEO, on-page optimization, content quality, and provides actionable recommendations. 100% free, fast, and no signup required.",
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
			<BuiltInSafeHttp />
		</ToolLayout>
	);
}
