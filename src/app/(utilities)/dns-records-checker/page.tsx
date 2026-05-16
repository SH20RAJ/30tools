import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import DnsLookupTool from "@/components/tools/built-ins/DnsLookupTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
	description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
	keywords: "dns records checker, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/dns-records-checker",
	},
	openGraph: {
		title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
		description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
		url: "https://30tools.com/dns-records-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free DNS Records Checker Online – Fast & No Signup | 30tools",
		description: "Retrieve all DNS records (A, MX, TXT, CNAME) for any domain instantly. Our free online tool helps you troubleshoot website hosting and email configuration issues. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/dns-records-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<DnsLookupTool />
		</ToolLayout>
	);
}
