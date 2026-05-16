import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
	description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
	keywords: "binary to ascii converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/binary-to-ascii-converter",
	},
	openGraph: {
		title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
		url: "https://30tools.com/binary-to-ascii-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/binary-to-ascii-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
