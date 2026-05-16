import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
	keywords: "decimal to binary converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/decimal-to-binary-converter",
	},
	openGraph: {
		title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
		url: "https://30tools.com/decimal-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Decimal to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert decimal numbers (Base-10) to binary code (Base-2) instantly. Our free online converter is perfect for students, developers, and data analysis tasks. Fast, secure, and accurate. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/decimal-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter />
		</ToolLayout>
	);
}
