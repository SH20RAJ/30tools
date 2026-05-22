import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import AsciiArtGeneratorTool from "@/components/tools/generators/AsciiArtGeneratorTool";

export const metadata = {
	title: "ASCII Art Generator Online – Free & No Signup | 30tools",
	description: "Convert images into text-based ASCII art online. Customize resolution and contrast for the perfect text-based representation.",
	
	keywords: "ascii-art-generator, Ascii Art Generator, free ascii-art-generator, Ascii Art Generator online, online generator, content creator, free maker, creative tool, 30tools",alternates: {
		canonical: "https://30tools.com/ascii-art-generator",
	},
	openGraph: {
		title: "ASCII Art Generator – Free Online Tool",
		description: "Convert images into text-based ASCII art online. Customize resolution and contrast for the perfect text-based representation.",
		url: "https://30tools.com/ascii-art-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "ASCII Art Generator – Fast & Secure",
		description: "Convert images into text-based ASCII art online. Customize resolution and contrast for the perfect text-based representation.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ascii-art-generator");
	if (!tool) {
		return notFound();
	}
	return (
		<ToolLayout tool={tool}>
			<AsciiArtGeneratorTool />
		</ToolLayout>
	);
}
