import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSerialization from "@/components/tools/built-ins/BuiltInSerialization";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON to Text Converter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JSON to Text Converter online. Secure, local developer utility with no registration.",
	keywords: "json to text converter, free online tool, no signup, json-to-text-converter, free json-to-text-converter, Json To Text Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-to-text-converter",
	},
	openGraph: {
		title: "Free JSON to Text Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON to Text Converter online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/json-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON to Text Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JSON to Text Converter online. Secure, local developer utility with no registration.",
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
			<BuiltInSerialization toolId="json-to-text-converter" />
		</ToolLayout>
	);
}
