import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
	keywords: "javascript beautifier, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/javascript-beautifier",
	},
	openGraph: {
		title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/javascript-beautifier");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="javascript-beautifier" />
		</ToolLayout>
	);
}
