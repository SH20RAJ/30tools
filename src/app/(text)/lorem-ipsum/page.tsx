import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import LoremIpsumGeneratorTool from "@/components/tools/generators/LoremIpsumGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Lorem Ipsum Generator Online - No Signup, Instant Results | 30tools",
	description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
	keywords: "lorem ipsum generator, free online tool, no signup, lorem-ipsum, Lorem Ipsum, free lorem-ipsum, Lorem Ipsum online, text tool, text editor online, content formatter, writing utility, 30tools",
	alternates: {
		canonical: "https://30tools.com/lorem-ipsum",
	},
	openGraph: {
		title: "Free Lorem Ipsum Generator Online - No Signup, Instant Results | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/lorem-ipsum",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Lorem Ipsum Generator Online - No Signup, Instant Results | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs. 100% free, fast, and no signup required.",
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
