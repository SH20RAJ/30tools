import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
	description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
	keywords: "css minifier, free online tool, no signup, css-minifier, free css-minifier, Css Minifier online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/css-minifier",
	},
	openGraph: {
		title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
		url: "https://30tools.com/css-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/css-minifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="css-minifier" />
		</ToolLayout>
	);
}
