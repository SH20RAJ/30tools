import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
	description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
	keywords: "html decoder, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/html-decoder",
	},
	openGraph: {
		title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
		description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Decoder Online – Fast & No Signup | 30tools",
		description: "Decode HTML entities back to their original characters instantly. Our free online tool converts &amp; and similar entities into readable text for easy debugging and content cleaning. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/html-decoder");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup />
		</ToolLayout>
	);
}
