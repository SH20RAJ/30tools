import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
	description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "http status code checker, free online tool, no signup, http-status-code-checker, free http-status-code-checker, Http Status Code Checker online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/http-status-code-checker",
	},
	openGraph: {
		title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
		description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/http-status-code-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
		description: "Free http status code checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/http-status-code-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="http-status-code-checker" />
		</ToolLayout>
	);
}
