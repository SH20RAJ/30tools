import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UrlParserTool from "@/components/tools/built-ins/UrlParserTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free URL Rewriting Tool Online - No Signup | 30tools",
	description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "url rewriting tool, free online tool, no signup, url-rewriting-tool, free url-rewriting-tool, Url Rewriting Tool online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/url-rewriting-tool",
	},
	openGraph: {
		title: "Free URL Rewriting Tool Online - No Signup | 30tools",
		description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/url-rewriting-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free URL Rewriting Tool Online - No Signup | 30tools",
		description: "Free url rewriting tool tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/url-rewriting-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UrlParserTool />
		</ToolLayout>
	);
}
