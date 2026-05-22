import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SeoToolkit from "@/components/tools/seo/SeoToolkit";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free SEO Toolkit Online - No Signup, Instant Audit | 30tools",
	description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
	keywords: "seo toolkit, free online tool, no signup, seotoolkit, free seotoolkit, Seotoolkit online, SEO tool, search optimizer, website analyzer, free SEO utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/seotoolkit",
	},
	openGraph: {
		title: "Free SEO Toolkit Online - No Signup, Instant Audit | 30tools",
		description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/seotoolkit",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free SEO Toolkit Online - No Signup, Instant Audit | 30tools",
		description: "All-in-one SEO audit and analysis tool. 27+ checks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/seotoolkit");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SeoToolkit />
		</ToolLayout>
	);
}
