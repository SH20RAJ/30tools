import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import WordCounterTool from "@/components/tools/text/WordCounterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Word Counter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Word Counter online. Fast and private browser utility with no signup. 100% free and secure.",
	keywords: "word counter, free online tool, no signup, word-counter, free word-counter, Word Counter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-counter",
	},
	openGraph: {
		title: "Free Word Counter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Word Counter online. Fast and private browser utility with no signup. 100% free and secure.",
		url: "https://30tools.com/word-counter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word Counter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Word Counter online. Fast and private browser utility with no signup. 100% free and secure.",
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
