import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
	description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
	keywords: "binary to text converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/binary-to-text-converter",
	},
	openGraph: {
		title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
		description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
		description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/binary-to-text-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
