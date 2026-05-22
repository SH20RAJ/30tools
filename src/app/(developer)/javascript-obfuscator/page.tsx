import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
	description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
	keywords: "javascript obfuscator, free online tool, no signup, javascript-obfuscator, free javascript-obfuscator, Javascript Obfuscator online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-obfuscator",
	},
	openGraph: {
		title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
		description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-obfuscator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Obfuscator Online – Fast & No Signup | 30tools",
		description: "Protect your JavaScript code by making it difficult to read and reverse-engineer. Our free online Obfuscator helps secure your intellectual property and prevent unauthorized script modification. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/javascript-obfuscator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="javascript-obfuscator" />
		</ToolLayout>
	);
}
