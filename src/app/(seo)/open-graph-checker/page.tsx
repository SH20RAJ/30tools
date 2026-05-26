import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Open Graph Checker Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Checker online. Optimize search presence with no signup. Try it free now.",
	keywords: "open graph checker, free online tool, no signup, open-graph-checker, free open-graph-checker, Open Graph Checker online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/open-graph-checker",
	},
	openGraph: {
		title: "Free Open Graph Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Checker online. Optimize search presence with no signup. Try it free now.",
		url: "https://30tools.com/open-graph-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Open Graph Checker Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Checker online. Optimize search presence with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/open-graph-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="open-graph-checker" />
		</ToolLayout>
	);
}
