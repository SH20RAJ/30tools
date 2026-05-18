import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "css beautifier, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/css-beautifier",
	},
	openGraph: {
		title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/css-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
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
