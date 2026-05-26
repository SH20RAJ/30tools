import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VisualSitemapTool from "@/components/tools/seo/VisualSitemapTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Visual Sitemap Generator online. Optimize search presence with no signup. 100% free.",
	keywords: "visual sitemap generator, free online tool, no signup, visual-sitemap, Visual Sitemap, free visual-sitemap, Visual Sitemap online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/visual-sitemap",
	},
	openGraph: {
		title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Visual Sitemap Generator online. Optimize search presence with no signup. 100% free.",
		url: "https://30tools.com/visual-sitemap",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Visual Sitemap Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Visual Sitemap Generator online. Optimize search presence with no signup. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/visual-sitemap");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<VisualSitemapTool />
		</ToolLayout>
	);
}
