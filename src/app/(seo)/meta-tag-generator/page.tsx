import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import MetaTagGenerator from "@/components/tools/built-ins/MetaTagGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Meta Tag Generator Online - No Signup, Instant Audit | 30tools",
	description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "meta tag generator, seo meta tags, html meta tags, meta description, title tag generator, free tool, 30tools, meta-tag-generator, free meta-tag-generator, meta tag generator online, seo tool, website analyzer",
	alternates: {
		canonical: "https://30tools.com/meta-tag-generator",
	},
	openGraph: {
		title: "Free Meta Tag Generator Online - No Signup, Instant Audit | 30tools",
		description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/meta-tag-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Meta Tag Generator Online - No Signup, Instant Audit | 30tools",
		description: "Free meta tag generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/meta-tag-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<MetaTagGenerator />
		</ToolLayout>
	);
}
