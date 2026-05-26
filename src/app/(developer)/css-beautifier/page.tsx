import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CSS Beautifier Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free CSS Beautifier online. Secure, local developer utility with no registration. Try it free now.",
	keywords: "css beautifier, free online tool, no signup, css-beautifier, free css-beautifier, Css Beautifier online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/css-beautifier",
	},
	openGraph: {
		title: "Free CSS Beautifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free CSS Beautifier online. Secure, local developer utility with no registration. Try it free now.",
		url: "https://30tools.com/css-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Beautifier Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free CSS Beautifier online. Secure, local developer utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/css-beautifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="css-beautifier" />
		</ToolLayout>
	);
}
