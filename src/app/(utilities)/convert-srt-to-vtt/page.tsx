import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import SrtToVttTool from "@/components/tools/text/SrtToVttTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Convert SRT to VTT Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Convert SRT to VTT online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "convert srt to vtt, free online tool, no signup, convert-srt-to-vtt, free convert-srt-to-vtt, Convert Srt To Vtt online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/convert-srt-to-vtt",
	},
	openGraph: {
		title: "Free Convert SRT to VTT Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Convert SRT to VTT online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/convert-srt-to-vtt",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Convert SRT to VTT Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Convert SRT to VTT online. Fast, secure browser-based utility with no registration. 100% free and secure.",
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
