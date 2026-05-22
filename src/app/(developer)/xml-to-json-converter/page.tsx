import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free XML to JSON Converter Online - No Signup, Client-Side | 30tools",
	description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
	keywords: "xml to json converter, free online tool, no signup, xml-to-json-converter, free xml-to-json-converter, Xml To Json Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/xml-to-json-converter",
	},
	openGraph: {
		title: "Free XML to JSON Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
		url: "https://30tools.com/xml-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free XML to JSON Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert XML documents to JSON format instantly. Our free online converter handles complex XML hierarchies to provide clean, developer-friendly JSON output for web apps. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/xml-to-json-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSerialization toolId="xml-to-json-converter" />
		</ToolLayout>
	);
}
