import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import WordCounterTool from "@/components/tools/text/WordCounterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Word Counter Online - No Signup, Instant Results | 30tools",
	description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
	keywords: "word counter, free online tool, no signup, word-counter, free word-counter, Word Counter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-counter",
	},
	openGraph: {
		title: "Free Word Counter Online - No Signup, Instant Results | 30tools",
		description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
		url: "https://30tools.com/word-counter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word Counter Online - No Signup, Instant Results | 30tools",
		description: "Count words, characters, sentences, and paragraphs in your text instantly. Our free online Word Counter also provides estimated reading time and text analysis. Fast and private. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/word-counter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<WordCounterTool />
		</ToolLayout>
	);
}
