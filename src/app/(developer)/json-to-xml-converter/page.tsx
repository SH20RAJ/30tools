import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
	keywords: "json to xml converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/json-to-xml-converter",
	},
	openGraph: {
		title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-xml-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to XML Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data to XML format instantly. Our free online tool handles nesting and attributes to ensure a clean transformation for legacy system compatibility. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-to-xml-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSerialization />
		</ToolLayout>
	);
}
