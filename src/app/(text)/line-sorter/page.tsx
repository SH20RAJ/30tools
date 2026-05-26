import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LineSorterTool from "@/components/tools/text/LineSorterTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Line Sorter Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Line Sorter online. Fast and private browser utility with no signup. No registration needed.",
	keywords: "line sorter, free online tool, no signup, line-sorter, free line-sorter, Line Sorter online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/line-sorter",
	},
	openGraph: {
		title: "Free Line Sorter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Line Sorter online. Fast and private browser utility with no signup. No registration needed.",
		url: "https://30tools.com/line-sorter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Line Sorter Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Line Sorter online. Fast and private browser utility with no signup. No registration needed.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/line-sorter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LineSorterTool />
		</ToolLayout>
	);
}
