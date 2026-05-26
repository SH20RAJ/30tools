import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import TextRepeaterTool from "@/components/tools/text/TextRepeaterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text Repeater Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Text Repeater online. Fast and private browser utility with no signup. 100% free and secure.",
	keywords: "text repeater, free online tool, no signup, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-repeater",
	},
	openGraph: {
		title: "Free Text Repeater Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text Repeater online. Fast and private browser utility with no signup. 100% free and secure.",
		url: "https://30tools.com/text-repeater",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Repeater Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Text Repeater online. Fast and private browser utility with no signup. 100% free and secure.",
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
