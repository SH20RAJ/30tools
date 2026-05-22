import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInMarkup from "@/components/tools/built-ins/BuiltInMarkup";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free JavaScript DeObfuscator Online - No Signup, Client-Side | 30tools",
	description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
	keywords: "javascript deobfuscator, free online tool, no signup, javascript-deobfuscator, free javascript-deobfuscator, Javascript Deobfuscator online, developer tool, web dev utility, code formatter, online developer, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-deobfuscator",
	},
	openGraph: {
		title: "Free JavaScript DeObfuscator Online - No Signup, Client-Side | 30tools",
		description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-deobfuscator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript DeObfuscator Online - No Signup, Client-Side | 30tools",
		description: "Make obfuscated JavaScript code readable again instantly. Our free online DeObfuscator reverses common obfuscation techniques to help with code analysis and debugging. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/javascript-deobfuscator");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInMarkup toolId="javascript-deobfuscator" />
		</ToolLayout>
	);
}
