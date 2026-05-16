import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
	keywords: "json to text converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/json-to-text-converter",
	},
	openGraph: {
		title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert JSON data into readable plain text instantly. Our free online tool is perfect for extracting values and creating human-readable documentation from raw data. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSerialization />
		</ToolLayout>
	);
}
