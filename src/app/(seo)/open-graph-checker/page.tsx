import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
	description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "open graph checker, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/open-graph-checker",
	},
	openGraph: {
		title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
		description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/open-graph-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Open Graph Checker Online – Fast & No Signup | 30tools",
		description: "Free open graph checker tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/open-graph-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp />
		</ToolLayout>
	);
}
