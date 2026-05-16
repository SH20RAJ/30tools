import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TextRepeaterTool from "@/components/tools/text/TextRepeaterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text Repeater Online – Fast & No Signup | 30tools",
	description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
	keywords: "text repeater, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/text-repeater",
	},
	openGraph: {
		title: "Free Text Repeater Online – Fast & No Signup | 30tools",
		description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-repeater",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Repeater Online – Fast & No Signup | 30tools",
		description: "Repeat any text as many times as you need with our free online Text Repeater. Perfect for testing, social media, or fun content. Simple, fast, and works instantly in your browser. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-repeater");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TextRepeaterTool />
		</ToolLayout>
	);
}
