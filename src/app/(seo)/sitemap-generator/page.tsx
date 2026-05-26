import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Sitemap Generator online. Optimize search presence with no signup.",
	keywords: "sitemap generator, xml sitemap, create sitemap, seo sitemap, website crawler, free tool, 30tools, sitemap-generator, free sitemap-generator, sitemap generator online, seo tool, website analyzer",
	alternates: {
		canonical: "https://30tools.com/sitemap-generator",
	},
	openGraph: {
		title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Sitemap Generator online. Optimize search presence with no signup.",
		url: "https://30tools.com/sitemap-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Advanced Sitemap Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Advanced Sitemap Generator online. Optimize search presence with no signup.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/sitemap-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="sitemap-generator" />
		</ToolLayout>
	);
}
