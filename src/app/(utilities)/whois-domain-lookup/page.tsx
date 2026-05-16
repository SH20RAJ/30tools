import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Whois Domain Lookup Online – Fast & No Signup | 30tools",
	description: "Free whois domain lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "whois domain lookup, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/whois-domain-lookup",
	},
	openGraph: {
		title: "Free Whois Domain Lookup Online – Fast & No Signup | 30tools",
		description: "Free whois domain lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/whois-domain-lookup",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Whois Domain Lookup Online – Fast & No Signup | 30tools",
		description: "Free whois domain lookup tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/whois-domain-lookup");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp />
		</ToolLayout>
	);
}
