import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CSSGradientTool from "@/components/tools/developer/CSSGradientTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CSS Gradient Generator Online - No Signup | 30tools",
	description: "Format, minify, validate, and convert code snippets with our free CSS Gradient Generator online. Secure, local developer utility with no registration.",
	keywords: "css, gradient, generator, free css gradient generator, online css gradient generator, 30tools, css-gradient-generator, css gradient generator, free css-gradient-generator, css gradient generator online, developer tool, online code utility",
	alternates: {
		canonical: "https://30tools.com/css-gradient-generator",
	},
	openGraph: {
		title: "Free CSS Gradient Generator Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free CSS Gradient Generator online. Secure, local developer utility with no registration.",
		url: "https://30tools.com/css-gradient-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Gradient Generator Online - No Signup | 30tools",
		description: "Format, minify, validate, and convert code snippets with our free CSS Gradient Generator online. Secure, local developer utility with no registration.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/css-gradient-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CSSGradientTool />
		</ToolLayout>
	);
}
