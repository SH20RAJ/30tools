import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
	keywords: "text to binary converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/text-to-binary-converter",
	},
	openGraph: {
		title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/text-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
