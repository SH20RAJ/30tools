import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON to CSV Converter Online - No Signup, Client-Side | 30tools",
	description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
	keywords: "json to csv converter, free online tool, no signup, json-to-csv-converter, free json-to-csv-converter, Json To Csv Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-csv-converter",
	},
	openGraph: {
		title: "Free JSON to CSV Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-csv-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to CSV Converter Online - No Signup, Client-Side | 30tools",
		description: "Convert JSON data to CSV format instantly. Our free online converter makes it easy to transform complex JSON structures into simple spreadsheet-ready tables. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-to-csv-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSerialization toolId="json-to-csv-converter" />
		</ToolLayout>
	);
}
