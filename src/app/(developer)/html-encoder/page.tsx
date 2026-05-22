import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
	description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
	keywords: "html encoder, free online tool, no signup, html-encoder, free html-encoder, Html Encoder online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-encoder",
	},
	openGraph: {
		title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
		description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-encoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Encoder Online – Fast & No Signup | 30tools",
		description: "Encode text into HTML entities instantly for secure web display. Our free online tool protects your markup by converting special characters into safe HTML-encoded strings. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-encoder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="html-encoder" />
		</ToolLayout>
	);
}
