import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
	description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
	keywords: "csv to json converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/csv-to-json-converter",
	},
	openGraph: {
		title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/csv-to-json-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSV to JSON Converter Online – Fast & No Signup | 30tools",
		description: "Convert CSV files to JSON format instantly. Our free online converter makes it easy to transform spreadsheet data into developer-friendly JSON code for web applications and APIs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/csv-to-json-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSerialization toolId="csv-to-json-converter" />
		</ToolLayout>
	);
}
