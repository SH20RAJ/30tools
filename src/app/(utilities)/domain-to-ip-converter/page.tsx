import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DomainToIPTool from "@/components/tools/built-ins/DomainToIPTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
	description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
	keywords: "domain to ip converter, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/domain-to-ip-converter",
	},
	openGraph: {
		title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
		description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
		url: "https://30tools.com/domain-to-ip-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Domain to IP Converter Online – Fast & No Signup | 30tools",
		description: "Find the IP address of any website instantly. Our free online tool helps you identify server locations and troubleshoot network connectivity issues. 100% free, fast, and no signup required.",
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
