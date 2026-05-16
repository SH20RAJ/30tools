import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
	description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
	keywords: "html minifier, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/html-minifier",
	},
	openGraph: {
		title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
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
			<BuiltInMarkup />
		</ToolLayout>
	);
}
