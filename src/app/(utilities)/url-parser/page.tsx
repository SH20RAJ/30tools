import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UrlParserTool from "@/components/tools/built-ins/UrlParserTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free URL Parser Online - No Signup | 30tools",
	description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "url parser, free online tool, no signup, url-parser, free url-parser, Url Parser online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-parser",
	},
	openGraph: {
		title: "Free URL Parser Online - No Signup | 30tools",
		description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/url-parser",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Parser Online - No Signup | 30tools",
		description: "Free url parser tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/url-parser");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UrlParserTool />
		</ToolLayout>
	);
}
