import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import JSONMinifierTool from "@/components/tools/developer/JSONMinifierTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JSON Minify Online – Fast & No Signup | 30tools",
	description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
	keywords: "json minify, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/json-minify",
	},
	openGraph: {
		title: "Free JSON Minify Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-minify",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Minify Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/json-minify");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<JSONMinifierTool />
		</ToolLayout>
	);
}
