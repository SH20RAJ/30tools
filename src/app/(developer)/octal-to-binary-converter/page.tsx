import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Octal to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Convert octal numbers to binary code instantly. Our free online converter provides fast and accurate base transformations for computer science students and developers. 100% free, fast, and no signup required.",
	keywords: "octal to binary converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/octal-to-binary-converter",
	},
	openGraph: {
		title: "Free Octal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal numbers to binary code instantly. Our free online converter provides fast and accurate base transformations for computer science students and developers. 100% free, fast, and no signup required.",
		url: "https://30tools.com/octal-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Octal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert octal numbers to binary code instantly. Our free online converter provides fast and accurate base transformations for computer science students and developers. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/octal-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
