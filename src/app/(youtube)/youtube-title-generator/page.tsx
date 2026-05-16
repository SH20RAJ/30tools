import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import YouTubeChannelIDFinderTool from "@/components/tools/youtube/YouTubeChannelIDFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
	description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
	keywords: "youtube title generator, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/youtube-title-generator",
	},
	openGraph: {
		title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
		description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
		url: "https://30tools.com/youtube-title-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free YouTube Title Generator Online – Fast & No Signup | 30tools",
		description: "Generate catchy and SEO-friendly titles for your YouTube videos instantly. Our free online tool suggests high-CTR titles based on your topic and keywords to help you get more views. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/youtube-title-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<YouTubeChannelIDFinderTool />
		</ToolLayout>
	);
}
