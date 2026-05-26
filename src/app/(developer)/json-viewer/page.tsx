import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Viewer Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON Viewer online. Secure, local developer utility with no registration. No signup required.",
	keywords: "json viewer, free online tool, no signup, json-viewer, free json-viewer, Json Viewer online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-viewer",
	},
	openGraph: {
		title: "Free JSON Viewer Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Viewer online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/json-viewer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Viewer Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Viewer online. Secure, local developer utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-viewer");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JsonFormatterTool />
		</ToolLayout>
	);
}
