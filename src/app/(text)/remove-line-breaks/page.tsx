import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import RemoveLineBreaksTool from "@/components/tools/text/RemoveLineBreaksTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Remove Line Breaks Online - No Signup, Instant Results | 30tools",
	description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
	keywords: "remove line breaks, free online tool, no signup, remove-line-breaks, free remove-line-breaks, Remove Line Breaks online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/remove-line-breaks",
	},
	openGraph: {
		title: "Free Remove Line Breaks Online - No Signup, Instant Results | 30tools",
		description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/remove-line-breaks",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Remove Line Breaks Online - No Signup, Instant Results | 30tools",
		description: "Remove line breaks, carriage returns, and extra whitespace from your text instantly. Perfect for cleaning up copied content for clean formatting. Free and privacy-focused online tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/remove-line-breaks");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<RemoveLineBreaksTool />
		</ToolLayout>
	);
}
