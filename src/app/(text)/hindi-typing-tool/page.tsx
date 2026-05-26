import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import HindiTypingTool from "@/components/tools/text/HindiTypingTool";

export const metadata = {
	title: "Free Hindi Typing Tool Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Hindi Typing Tool online. Fast and private browser utility with no signup. Try it free now.",
	keywords: "hindi-typing-tool, Hindi Typing Tool",
	alternates: {
		canonical: "https://30tools.com/hindi-typing-tool",
	},
	openGraph: {
		title: "Free Hindi Typing Tool Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Hindi Typing Tool online. Fast and private browser utility with no signup. Try it free now.",
		url: "https://30tools.com/hindi-typing-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Hindi Typing Tool Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Hindi Typing Tool online. Fast and private browser utility with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hindi-typing-tool");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<HindiTypingTool />
		</ToolLayout>
	);
}
