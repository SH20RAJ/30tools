import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JavaScript Minifier Online - No Signup, Client-Side | 30tools",
	description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
	keywords: "javascript minifier, minify js, js compressor, javascript minification, online tool, 30tools, javascript-minifier, free javascript-minifier, javascript minifier online, developer tool, online code utility, free developer tool",
	alternates: {
		canonical: "https://30tools.com/javascript-minifier",
	},
	openGraph: {
		title: "Free JavaScript Minifier Online - No Signup, Client-Side | 30tools",
		description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Minifier Online - No Signup, Client-Side | 30tools",
		description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
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
