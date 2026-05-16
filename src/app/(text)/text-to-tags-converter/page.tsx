import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TagsFromTextTool from "@/components/tools/text/TagsFromTextTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
	description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
	keywords: "text to tags converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/text-to-tags-converter",
	},
	openGraph: {
		title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
		description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-tags-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Tags Converter Online – Fast & No Signup | 30tools",
		description: "Extract and generate relevant meta tags from your text instantly. Our free online converter helps you create SEO tags, HTML keywords, and header tags for better web visibility. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-tags-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<TagsFromTextTool />
		</ToolLayout>
	);
}
