import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TextCompareTool from "@/components/tools/text/TextCompareTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text Compare Online – Fast & No Signup | 30tools",
	description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
	keywords: "text compare, free online tool, no signup, text-compare, free text-compare, Text Compare online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-compare",
	},
	openGraph: {
		title: "Free Text Compare Online – Fast & No Signup | 30tools",
		description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-compare",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Compare Online – Fast & No Signup | 30tools",
		description: "Compare two text snippets side-by-side to find differences instantly. Our free online Text Compare tool highlights additions, deletions, and changes with high precision. Secure and browser-based. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-compare");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TextCompareTool />
		</ToolLayout>
	);
}
