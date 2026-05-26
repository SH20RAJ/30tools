import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Octal to Binary Converter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free Octal to Binary Converter online. Secure, local developer utility with no registration.",
	keywords: "octal to binary converter, free online tool, no signup, octal-to-binary-converter, free octal-to-binary-converter, Octal To Binary Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/octal-to-binary-converter",
	},
	openGraph: {
		title: "Free Octal to Binary Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Octal to Binary Converter online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/octal-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Octal to Binary Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Octal to Binary Converter online. Secure, local developer utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/octal-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="octal-to-binary" />
		</ToolLayout>
	);
}
