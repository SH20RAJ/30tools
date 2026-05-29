import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Server Status Checker Online - No Signup | 30tools",
	description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "server status checker, free online tool, no signup, server-status-checker, free server-status-checker, Server Status Checker online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/server-status-checker",
	},
	openGraph: {
		title: "Free Server Status Checker Online - No Signup | 30tools",
		description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/server-status-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Server Status Checker Online - No Signup | 30tools",
		description: "Free server status checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/server-status-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="server-status-checker" />
		</ToolLayout>
	);
}
