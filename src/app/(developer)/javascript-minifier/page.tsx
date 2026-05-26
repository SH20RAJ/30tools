import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JavaScript Minifier Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free JavaScript Minifier online. Secure, local developer utility with no registration. Easy to use.",
	keywords: "javascript minifier, minify js, js compressor, javascript minification, online tool, 30tools, javascript-minifier, free javascript-minifier, javascript minifier online, developer tool, online code utility, free developer tool",
	alternates: {
		canonical: "https://30tools.com/javascript-minifier",
	},
	openGraph: {
		title: "Free JavaScript Minifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JavaScript Minifier online. Secure, local developer utility with no registration. Easy to use.",
		url: "https://30tools.com/javascript-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Minifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free JavaScript Minifier online. Secure, local developer utility with no registration. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/javascript-minifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="javascript-minifier" />
		</ToolLayout>
	);
}
