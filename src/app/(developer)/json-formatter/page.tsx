import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONFormatterTool from "@/components/tools/developer/JSONFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Formatter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON Formatter online. Secure, local developer utility with no registration. Try it free now.",
	keywords: "json formatter, beautify json, json prettifier, format json online, json validator, free tool, 30tools, json-formatter, free json-formatter, json formatter online, developer tool, online code utility",
	alternates: {
		canonical: "https://30tools.com/json-formatter",
	},
	openGraph: {
		title: "Free JSON Formatter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Formatter online. Secure, local developer utility with no registration. Try it free now.",
		url: "https://30tools.com/json-formatter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Formatter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Formatter online. Secure, local developer utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-formatter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JSONFormatterTool />
		</ToolLayout>
	);
}
