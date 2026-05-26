import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Backlink Checker Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Backlink Checker online. Optimize search presence with no signup. Try it free now.",
	keywords: "backlink checker, check backlinks, domain backlinks, link analysis, seo backlinks, free tool, 30tools, backlink-checker, free backlink-checker, backlink checker online, seo tool, website analyzer",
	alternates: {
		canonical: "https://30tools.com/backlink-checker",
	},
	openGraph: {
		title: "Free Backlink Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Backlink Checker online. Optimize search presence with no signup. Try it free now.",
		url: "https://30tools.com/backlink-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Backlink Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Backlink Checker online. Optimize search presence with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/backlink-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="backlink-checker" />
		</ToolLayout>
	);
}
