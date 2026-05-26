import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Minifier Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free HTML Minifier online. Secure, local developer utility with no registration. Try it free now.",
	keywords: "html minifier, free online tool, no signup, html-minifier, free html-minifier, Html Minifier online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-minifier",
	},
	openGraph: {
		title: "Free HTML Minifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Minifier online. Secure, local developer utility with no registration. Try it free now.",
		url: "https://30tools.com/html-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Minifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Minifier online. Secure, local developer utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-minifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="html-minifier" />
		</ToolLayout>
	);
}
