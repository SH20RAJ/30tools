import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Binary to HEX Converter Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free Binary to HEX Converter online. Secure, local developer utility with no registration.",
	keywords: "binary to hex converter, free online tool, no signup, binary-to-hex-converter, free binary-to-hex-converter, Binary To Hex Converter online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-hex-converter",
	},
	openGraph: {
		title: "Free Binary to HEX Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Binary to HEX Converter online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/binary-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to HEX Converter Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free Binary to HEX Converter online. Secure, local developer utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/binary-to-hex-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="binary-to-hex" />
		</ToolLayout>
	);
}
