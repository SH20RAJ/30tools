import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JsonFormatterTool from "@/components/tools/code/JsonFormatterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Editor Online – Fast & No Signup | 30tools",
	description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
	keywords: "json editor, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/json-editor",
	},
	openGraph: {
		title: "Free JSON Editor Online – Fast & No Signup | 30tools",
		description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Editor Online – Fast & No Signup | 30tools",
		description: "Edit, modify, and manage JSON data with our free online JSON Editor. Features syntax highlighting, tree view, and validation to help you structure your data perfectly. 100% free, fast, and no signup required.",
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
