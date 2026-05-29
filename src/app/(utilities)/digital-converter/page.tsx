import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import UniversalUnitConverter from "@/components/tools/built-ins/UniversalUnitConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Digital Converter Online - No Signup | 30tools",
	description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds.",
	keywords: "digital converter, free online tool, no signup, digital-converter, free digital-converter, Digital Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/digital-converter",
	},
	openGraph: {
		title: "Free Digital Converter Online - No Signup | 30tools",
		description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds.",
		url: "https://30tools.com/digital-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Digital Converter Online - No Signup | 30tools",
		description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/digital-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<UniversalUnitConverter preset="digital" />
		</ToolLayout>
	);
}
