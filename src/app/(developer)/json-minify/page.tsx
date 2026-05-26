import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONMinifierTool from "@/components/tools/developer/JSONMinifierTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Minify Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON Minify online. Secure, local developer utility with no registration. No signup required.",
	keywords: "json minify, free online tool, no signup, json-minify, free json-minify, Json Minify online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-minify",
	},
	openGraph: {
		title: "Free JSON Minify Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Minify online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/json-minify",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Minify Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Minify online. Secure, local developer utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-minify");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JSONMinifierTool />
		</ToolLayout>
	);
}
