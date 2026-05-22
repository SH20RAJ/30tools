import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONToSchemaTool from "@/components/tools/developer/JSONToSchemaTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON to JSON Schema Online - No Signup, Client-Side | 30tools",
	description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
	keywords: "json to json schema, free online tool, no signup, json-to-json-schema, free json-to-json-schema, Json To Json Schema online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-json-schema",
	},
	openGraph: {
		title: "Free JSON to JSON Schema Online - No Signup, Client-Side | 30tools",
		description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-json-schema",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to JSON Schema Online - No Signup, Client-Side | 30tools",
		description: "Generate a JSON Schema from your JSON data automatically. Our free online tool helps you define validation rules and document your JSON structure for APIs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-to-json-schema");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JSONToSchemaTool />
		</ToolLayout>
	);
}
