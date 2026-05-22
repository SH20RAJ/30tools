import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VisualSitemapTool from "@/components/tools/seo/VisualSitemapTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Visual Sitemap Generator Online - No Signup, Instant Audit | 30tools",
	description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
	keywords: "visual sitemap generator, free online tool, no signup, visual-sitemap, Visual Sitemap, free visual-sitemap, Visual Sitemap online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/visual-sitemap",
	},
	openGraph: {
		title: "Free Visual Sitemap Generator Online - No Signup, Instant Audit | 30tools",
		description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
		url: "https://30tools.com/visual-sitemap",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Visual Sitemap Generator Online - No Signup, Instant Audit | 30tools",
		description: "Visualize your website's sitemap structure instantly. Enter your XML sitemap URL to generate a dynamic tree view of your site hierarchy. 100% free, fast, and no signup required.",
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
