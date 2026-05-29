import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import BuiltInSafeHttp from "@/components/tools/built-ins/BuiltInSafeHttp";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Page Size Checker Online - No Signup | 30tools",
	description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
	keywords: "page size checker, free online tool, no signup, page-size-checker, free page-size-checker, Page Size Checker online, online utility, web calculator, free converter, browser tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/page-size-checker",
	},
	openGraph: {
		title: "Free Page Size Checker Online - No Signup | 30tools",
		description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		url: "https://30tools.com/page-size-checker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Page Size Checker Online - No Signup | 30tools",
		description: "Free page size checker tool to process your data instantly with privacy-friendly browser-based workflows.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/page-size-checker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<BuiltInSafeHttp toolId="page-size-checker" />
		</ToolLayout>
	);
}
