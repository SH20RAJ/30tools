import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import OpenGraphGenerator from "@/components/tools/built-ins/OpenGraphGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Open Graph Generator Online - No Signup | 30tools",
	description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Generator online. Optimize search presence with no signup. Free & secure.",
	keywords: "open graph generator, free online tool, no signup, open-graph-generator, free open-graph-generator, Open Graph Generator online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/open-graph-generator",
	},
	openGraph: {
		title: "Free Open Graph Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Generator online. Optimize search presence with no signup. Free & secure.",
		url: "https://30tools.com/open-graph-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Open Graph Generator Online - No Signup | 30tools",
		description: "Audit websites, analyze search rankings, and generate schemas with our free Open Graph Generator online. Optimize search presence with no signup. Free & secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/open-graph-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<OpenGraphGenerator />
		</ToolLayout>
	);
}
