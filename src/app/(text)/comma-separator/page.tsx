import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import CommaSeparatorTool from "@/components/tools/text/CommaSeparatorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Comma Separator Online – Fast & No Signup | 30tools",
	description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
	keywords: "comma separator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/comma-separator",
	},
	openGraph: {
		title: "Free Comma Separator Online – Fast & No Signup | 30tools",
		description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
		url: "https://30tools.com/comma-separator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Comma Separator Online – Fast & No Signup | 30tools",
		description: "Convert lists, columns, or text into comma-separated values (CSV) instantly. Our free online Comma Separator is perfect for data cleaning and formatting tasks. Privacy-focused browser tool. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/comma-separator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<CommaSeparatorTool />
		</ToolLayout>
	);
}
