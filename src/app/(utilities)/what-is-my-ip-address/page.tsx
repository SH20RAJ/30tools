import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PublicIpTool from "@/components/tools/built-ins/PublicIpTool";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free What Is My IP Address Online - No Signup, All-in-One | 30tools",
	description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "what is my ip address, free online tool, no signup, what-is-my-ip-address, free what-is-my-ip-address, What Is My Ip Address online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/what-is-my-ip-address",
	},
	openGraph: {
		title: "Free What Is My IP Address Online - No Signup, All-in-One | 30tools",
		description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/what-is-my-ip-address",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free What Is My IP Address Online - No Signup, All-in-One | 30tools",
		description: "Free what is my ip address tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/what-is-my-ip-address");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PublicIpTool />
		</ToolLayout>
	);
}
