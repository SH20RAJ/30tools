import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Editor Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON Editor online. Secure, local developer utility with no registration. No signup required.",
	keywords: "json editor, free online tool, no signup, json-editor, free json-editor, Json Editor online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-editor",
	},
	openGraph: {
		title: "Free JSON Editor Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Editor online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/json-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Editor Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Editor online. Secure, local developer utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-editor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JsonFormatterTool />
		</ToolLayout>
	);
}
