import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Random Word Generator Online - No Signup, Instant Results | 30tools",
	description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
	keywords: "random word generator, free online tool, no signup, random-word-generator, free random-word-generator, Random Word Generator online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/random-word-generator",
	},
	openGraph: {
		title: "Free Random Word Generator Online - No Signup, Instant Results | 30tools",
		description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
		url: "https://30tools.com/random-word-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Random Word Generator Online - No Signup, Instant Results | 30tools",
		description: "Generate random words instantly for creative writing, brainstorming, or vocabulary practice. Our free online tool offers customizable options for word type and quantity. Fun and fast. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/random-word-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LineSorterTool />
		</ToolLayout>
	);
}
