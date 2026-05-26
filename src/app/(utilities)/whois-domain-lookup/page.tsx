import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Whois Domain Lookup Online - No Signup | 30tools",
	description: "Solve everyday digital tasks instantly using our free Whois Domain Lookup online. Fast, secure browser-based utility with no registration. 100% free and secure.",
	keywords: "whois lookup, domain lookup, check domain, domain availability, whois search, free tool, 30tools, whois-domain-lookup, whois domain lookup, free whois-domain-lookup, whois domain lookup online, online utility",
	alternates: {
		canonical: "https://30tools.com/whois-domain-lookup",
	},
	openGraph: {
		title: "Free Whois Domain Lookup Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Whois Domain Lookup online. Fast, secure browser-based utility with no registration. 100% free and secure.",
		url: "https://30tools.com/whois-domain-lookup",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Whois Domain Lookup Online - No Signup | 30tools",
		description: "Solve everyday digital tasks instantly using our free Whois Domain Lookup online. Fast, secure browser-based utility with no registration. 100% free and secure.",
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
			<BuiltInSafeHttp toolId="whois-domain-lookup" />
		</ToolLayout>
	);
}
