import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LoremIpsumGeneratorTool from "@/components/tools/generators/LoremIpsumGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
	description: "Format, clean, sort, and analyze text files instantly with our free Lorem Ipsum Generator online. Fast and private browser utility with no signup. Easy to use.",
	keywords: "lorem ipsum generator, free online tool, no signup, lorem-ipsum, Lorem Ipsum, free lorem-ipsum, Lorem Ipsum online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/lorem-ipsum",
	},
	openGraph: {
		title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Lorem Ipsum Generator online. Fast and private browser utility with no signup. Easy to use.",
		url: "https://30tools.com/lorem-ipsum",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
		description: "Format, clean, sort, and analyze text files instantly with our free Lorem Ipsum Generator online. Fast and private browser utility with no signup. Easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/lorem-ipsum");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<LoremIpsumGeneratorTool />
		</ToolLayout>
	);
}
