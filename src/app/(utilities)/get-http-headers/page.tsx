import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Get HTTP Headers Online - No Signup | 30tools",
	description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "get http headers, free online tool, no signup, get-http-headers, free get-http-headers, Get Http Headers online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/get-http-headers",
	},
	openGraph: {
		title: "Free Get HTTP Headers Online - No Signup | 30tools",
		description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/get-http-headers",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Get HTTP Headers Online - No Signup | 30tools",
		description: "Free get http headers tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/get-http-headers");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="get-http-headers" />
		</ToolLayout>
	);
}
