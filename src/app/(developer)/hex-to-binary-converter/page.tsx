import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BaseConverter from "@/components/tools/shared/BaseConverter";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "hex to binary converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/hex-to-binary-converter",
	},
	openGraph: {
		title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/hex-to-binary-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BaseConverter converterKind="hex-to-binary" />
		</ToolLayout>
	);
}
