import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Validator Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON Validator online. Secure, local developer utility with no registration. Try it free now.",
	keywords: "json validator, validate json, json syntax checker, json lint, online json validator, free tool, 30tools, json-validator, free json-validator, json validator online, developer tool, online code utility",
	alternates: {
		canonical: "https://30tools.com/json-validator",
	},
	openGraph: {
		title: "Free JSON Validator Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Validator online. Secure, local developer utility with no registration. Try it free now.",
		url: "https://30tools.com/json-validator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Validator Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON Validator online. Secure, local developer utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-validator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JsonFormatterTool />
		</ToolLayout>
	);
}
