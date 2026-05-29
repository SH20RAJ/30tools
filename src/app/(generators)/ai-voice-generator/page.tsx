import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import AIVoiceGeneratorTool from "@/components/tools/generators/AIVoiceGeneratorTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free AI Voice Generator Online - No Signup | 30tools",
	description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers...",
	keywords: "ai voice generator, free online tool, no signup, ai-voice-generator, free ai-voice-generator, Ai Voice Generator online, online generator, content creator, free maker, creative tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-voice-generator",
	},
	openGraph: {
		title: "Free AI Voice Generator Online - No Signup | 30tools",
		description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers...",
		url: "https://30tools.com/ai-voice-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Voice Generator Online - No Signup | 30tools",
		description: "Convert text to natural-sounding AI voices instantly. Our free text-to-speech tool offers multiple languages and accents for professional voiceovers...",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ai-voice-generator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<AIVoiceGeneratorTool />
		</ToolLayout>
	);
}
