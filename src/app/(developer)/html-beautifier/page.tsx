import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
	keywords: "html beautifier, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/html-beautifier",
	},
	openGraph: {
		title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-beautifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="html-beautifier" />
		</ToolLayout>
	);
}
