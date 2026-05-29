import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import HtaccessGenerator from "@/components/tools/built-ins/HtaccessGenerator";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Htaccess Redirect Generator Online - No Signup | 30tools",
	description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "htaccess redirect generator, free online tool, no signup, htaccess-redirect-generator, free htaccess-redirect-generator, Htaccess Redirect Generator online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/htaccess-redirect-generator",
	},
	openGraph: {
		title: "Free Htaccess Redirect Generator Online - No Signup | 30tools",
		description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/htaccess-redirect-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Htaccess Redirect Generator Online - No Signup | 30tools",
		description: "Free htaccess redirect generator tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/htaccess-redirect-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<HtaccessGenerator />
		</ToolLayout>
	);
}
