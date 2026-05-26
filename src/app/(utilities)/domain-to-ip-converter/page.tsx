import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DomainToIPTool from "@/components/tools/built-ins/DomainToIPTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Domain to IP Converter Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Domain to IP Converter online. Fast, secure browser-based utility with no registration. Try it free now.",
	keywords: "domain to ip converter, free online tool, no signup, domain-to-ip-converter, free domain-to-ip-converter, Domain To Ip Converter online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/domain-to-ip-converter",
	},
	openGraph: {
		title: "Free Domain to IP Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Domain to IP Converter online. Fast, secure browser-based utility with no registration. Try it free now.",
		url: "https://30tools.com/domain-to-ip-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Domain to IP Converter Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Domain to IP Converter online. Fast, secure browser-based utility with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/domain-to-ip-converter");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DomainToIPTool />
		</ToolLayout>
	);
}
