import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SrtToVttTool from "@/components/tools/text/SrtToVttTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
	description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
	keywords: "convert srt to vtt, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/convert-srt-to-vtt",
	},
	openGraph: {
		title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
		url: "https://30tools.com/convert-srt-to-vtt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert SRT to VTT Online – Fast & No Signup | 30tools",
		description: "Convert subtitle files from SRT to VTT format instantly. Our free online tool ensures compatibility with web-based video players and modern streaming platforms. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/convert-srt-to-vtt");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<SrtToVttTool />
		</ToolLayout>
	);
}
