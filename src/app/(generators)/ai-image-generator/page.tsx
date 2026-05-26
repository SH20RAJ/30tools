import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import AIImageGeneratorTool from "@/components/tools/generators/AIImageGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free AI Image Generator Online - No Signup | 30tools",
	description: "Create custom content with our free AI Image Generator online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
	keywords: "ai image generator, free online tool, no signup, ai-image-generator, free ai-image-generator, Ai Image Generator online, online generator, content creator, free maker, creative tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-image-generator",
	},
	openGraph: {
		title: "Free AI Image Generator Online - No Signup | 30tools",
		description: "Create custom content with our free AI Image Generator online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
		url: "https://30tools.com/ai-image-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Image Generator Online - No Signup | 30tools",
		description: "Create custom content with our free AI Image Generator online. Generate high-quality outputs instantly with no registration required. 100% free and easy to use.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ai-image-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AIImageGeneratorTool />
		</ToolLayout>
	);
}
