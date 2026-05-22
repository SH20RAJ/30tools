import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Validator Online - No Signup, Client-Side | 30tools",
	description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
	keywords: "json validator, validate json, json syntax checker, json lint, online json validator, free tool, 30tools, json-validator, free json-validator, json validator online, developer tool, online code utility",
	alternates: {
		canonical: "https://30tools.com/json-validator",
	},
	openGraph: {
		title: "Free JSON Validator Online - No Signup, Client-Side | 30tools",
		description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-validator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Validator Online - No Signup, Client-Side | 30tools",
		description: "Validate your JSON data for syntax errors and structural integrity instantly. Our free online tool helps you catch bugs and ensure your JSON is RFC-compliant. 100% free, fast, and no signup required.",
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
