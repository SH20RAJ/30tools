import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Encoder Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free HTML Encoder online. Secure, local developer utility with no registration. No signup required.",
	keywords: "html encoder, free online tool, no signup, html-encoder, free html-encoder, Html Encoder online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-encoder",
	},
	openGraph: {
		title: "Free HTML Encoder Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Encoder online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/html-encoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Encoder Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Encoder online. Secure, local developer utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-encoder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="html-encoder" />
		</ToolLayout>
	);
}
