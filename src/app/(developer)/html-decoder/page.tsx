import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Decoder Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free HTML Decoder online. Secure, local developer utility with no registration. No signup required.",
	keywords: "html decoder, free online tool, no signup, html-decoder, free html-decoder, Html Decoder online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-decoder",
	},
	openGraph: {
		title: "Free HTML Decoder Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Decoder online. Secure, local developer utility with no registration. No signup required.",
		url: "https://30tools.com/html-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Decoder Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free HTML Decoder online. Secure, local developer utility with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-decoder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="html-decoder" />
		</ToolLayout>
	);
}
