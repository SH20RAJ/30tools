import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
	keywords: "text to octal converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/text-to-octal-converter",
	},
	openGraph: {
		title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert text into octal numeric values instantly. Our free online converter provides base-8 representations for every character in your text for technical analysis. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-octal-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
