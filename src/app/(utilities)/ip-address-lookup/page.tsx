import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import IPLocationFinderTool from "@/components/tools/utilities/IPLocationFinderTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free IP Address Lookup Online - No Signup | 30tools",
	description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "ip address lookup, free online tool, no signup, ip-address-lookup, free ip-address-lookup, Ip Address Lookup online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/ip-address-lookup",
	},
	openGraph: {
		title: "Free IP Address Lookup Online - No Signup | 30tools",
		description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/ip-address-lookup",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free IP Address Lookup Online - No Signup | 30tools",
		description: "Free ip address lookup tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/ip-address-lookup");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<IPLocationFinderTool />
		</ToolLayout>
	);
}
