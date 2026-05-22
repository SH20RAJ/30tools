import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONFormatterTool from "@/components/tools/developer/JSONFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
	description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
	keywords: "json formatter, beautify json, json prettifier, format json online, json validator, free tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-formatter",
	},
	openGraph: {
		title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
		description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-formatter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Formatter Online – Fast & No Signup | 30tools",
		description: "Format and beautify your JSON data instantly for better readability. Our free online tool validates your JSON structure and provides a clean, indented view of your code. 100% free, fast, and no signup required.",
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
