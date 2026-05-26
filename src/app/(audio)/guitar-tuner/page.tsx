import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import GuitarTunerTool from "@/components/tools/audio/GuitarTunerTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Guitar Tuner Online - No Signup | 30tools",
	description: "Process, edit, and convert audio files with our free Guitar Tuner online. High-quality output and private browser-based tools with no signup. Try it free now.",
	keywords: "guitar tuner, free online tool, no signup, guitar-tuner, free guitar-tuner, Guitar Tuner online, audio tool, sound editor, music utility, audio converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/guitar-tuner",
	},
	openGraph: {
		title: "Free Guitar Tuner Online - No Signup | 30tools",
		description: "Process, edit, and convert audio files with our free Guitar Tuner online. High-quality output and private browser-based tools with no signup. Try it free now.",
		url: "https://30tools.com/guitar-tuner",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Guitar Tuner Online - No Signup | 30tools",
		description: "Process, edit, and convert audio files with our free Guitar Tuner online. High-quality output and private browser-based tools with no signup. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/guitar-tuner");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<GuitarTunerTool />
		</ToolLayout>
	);
}
