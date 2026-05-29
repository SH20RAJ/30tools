import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import VttToSrtTool from "@/components/tools/text/VttToSrtTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Convert VTT to SRT Online - No Signup | 30tools",
	description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players.",
	keywords: "convert vtt to srt, free online tool, no signup, convert-vtt-to-srt, free convert-vtt-to-srt, Convert Vtt To Srt online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-vtt-to-srt",
	},
	openGraph: {
		title: "Free Convert VTT to SRT Online - No Signup | 30tools",
		description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players.",
		url: "https://30tools.com/convert-vtt-to-srt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert VTT to SRT Online - No Signup | 30tools",
		description: "Convert subtitle files from VTT to SRT format instantly. Our free online tool makes it easy to use web captions with traditional desktop video players.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/convert-vtt-to-srt");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<VttToSrtTool />
		</ToolLayout>
	);
}
